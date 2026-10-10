// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE } from './src/site.config.js';
import { readdirSync, readFileSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * Build a pathname -> lastmod (YYYY-MM-DD) map from content frontmatter.
 * Reads `lastUpdated:` (fallback `published:`) from each src/content/**.md file.
 * Runs once at config load; keeps the sitemap's <lastmod> honest so Google
 * can prioritize fresh/updated URLs instead of crawling on its own schedule.
 */
function buildLastmodMap() {
  const map = new Map();
  const contentDir = fileURLToPath(new URL('./src/content/', import.meta.url));
  const walk = (dir) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const full = join(dir, entry.name);
      if (entry.isDirectory()) { walk(full); continue; }
      if (!entry.name.endsWith('.md')) continue;
      const rel = relative(contentDir, full).slice(0, -3).split(sep).join('/');
      let text;
      try { text = readFileSync(full, 'utf8'); } catch { continue; }
      const head = text.split('---')[1] ?? '';
      const m = head.match(/^lastUpdated:\s*["']?(\d{4}-\d{2}-\d{2})["']?/m)
        || head.match(/^published:\s*["']?(\d{4}-\d{2}-\d{2})["']?/m);
      if (m) map.set(`/${rel}/`, m[1]);
    }
  };
  try { walk(contentDir); } catch { /* content dir missing -> no lastmod */ }
  return map;
}

const lastmodMap = buildLastmodMap();

export default defineConfig({
  site: SITE.url,
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap({
    serialize(item) {
      const path = new URL(item.url).pathname;
      const lm = lastmodMap.get(path);
      if (lm) item.lastmod = lm;
      return item;
    },
  })],
  markdown: {
    shikiConfig: { theme: 'github-light' },
  },
});
