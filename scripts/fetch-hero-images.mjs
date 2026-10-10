/**
 * fetch-hero-images.mjs
 *
 * Downloads a Bing thumbnail for every profile into public/img/heroes/<category>/<slug>.jpg
 * so hero images are served from our own domain (Bing blocks embedded hotlinking in browsers).
 *
 * - Idempotent: skips files that already exist.
 * - Tolerant: a failed download never fails the build; the page simply renders without a hero image.
 * - Runs as part of `npm run build` (see package.json).
 * - Only Node built-ins are used so it works in the Cloudflare build environment.
 */
import { mkdir, writeFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { CATEGORIES } from '../src/site.config.js';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CONTENT = path.join(ROOT, 'src', 'content');
const OUT = path.join(ROOT, 'public', 'img', 'heroes');
const CONCURRENCY = 20;
const TIMEOUT_MS = 30000;

const bingThumb = (title) =>
  `https://tse1.mm.bing.net/th?q=${encodeURIComponent(title).replace(/%20/g, '+')}&w=624&h=352&c=7`;

function frontmatterField(fm, key) {
  const m = fm.match(new RegExp(`^${key}:\\s*(.+?)\\s*$`, 'm'));
  return m ? m[1].replace(/^["']|["']$/g, '') : undefined;
}

function parseFile(src) {
  const m = src.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return {};
  const fm = m[1];
  return {
    title: frontmatterField(fm, 'title'),
    image: frontmatterField(fm, 'image'),
    draft: /^draft:\s*true\s*$/m.test(fm),
  };
}

async function download(url, dest) {
  const res = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36' },
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 2048) throw new Error(`suspiciously small (${buf.length} bytes)`);
  if (buf[0] !== 0xff || buf[1] !== 0xd8) throw new Error('not a JPEG');
  await mkdir(path.dirname(dest), { recursive: true });
  await writeFile(dest, buf);
  return buf.length;
}

async function pool(items, worker, size) {
  let i = 0;
  let ok = 0;
  let skipped = 0;
  let failed = 0;
  const failures = [];
  async function next() {
    while (i < items.length) {
      const item = items[i++];
      try {
        const r = await worker(item);
        if (r === 'skipped') skipped++;
        else ok++;
      } catch (err) {
        failed++;
        failures.push(`${item.slug}: ${err.message}`);
      }
    }
  }
  await Promise.all(Array.from({ length: Math.min(size, items.length) }, next));
  return { ok, skipped, failed, failures };
}

async function main() {
  const { readFile } = await import('node:fs/promises');
  const jobs = [];
  for (const cat of CATEGORIES) {
    const dir = path.join(CONTENT, cat.collection);
    let files;
    try {
      files = (await readdir(dir)).filter((f) => f.endsWith('.md') && !f.startsWith('_'));
    } catch {
      continue;
    }
    for (const file of files) {
      const slug = file.replace(/\.md$/, '');
      const src = await readFile(path.join(dir, file), 'utf8');
      const { title, image, draft } = parseFile(src);
      if (draft || image || !title) continue; // drafts, custom overrides, or untitled need no download
      const dest = path.join(OUT, cat.slug, `${slug}.jpg`);
      jobs.push({ slug: `${cat.slug}/${slug}`, title, dest, url: bingThumb(title) });
    }
  }

  const { ok, skipped, failed, failures } = await pool(
    jobs,
    async (job) => {
      try {
        const st = await stat(job.dest);
        if (st.size > 0) return 'skipped';
      } catch {
        /* missing — download it */
      }
      const bytes = await download(job.url, job.dest);
      if (process.env.VERBOSE) console.log(`ok ${job.slug} (${bytes} bytes)`);
    },
    CONCURRENCY
  );

  console.log(`[hero-images] downloaded=${ok} skipped(existing)=${skipped} failed=${failed} total=${jobs.length}`);
  for (const f of failures.slice(0, 20)) console.log(`[hero-images] FAILED ${f}`);
  if (failures.length > 20) console.log(`[hero-images] ... and ${failures.length - 20} more failures`);
}

main().catch((err) => {
  console.error('[hero-images] fatal:', err.message);
  process.exitCode = 1;
});
