/** Validate the HTML and sitemap that will actually be deployed. Run after astro build. */
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE, CATEGORIES } from '../src/site.config.js';

const root = fileURLToPath(new URL('../', import.meta.url));
const dist = path.join(root, 'dist');
assert(existsSync(dist), 'Build the site before checking the generated SEO output.');
const walk = (dir) => readdirSync(dir, { withFileTypes: true }).flatMap(e =>
  e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)]);
const files = walk(dist);
const htmlFiles = files.filter(f => f.endsWith('.html'));
const sitemapText = files.filter(f => /sitemap.*\.xml$/.test(f)).map(f => readFileSync(f, 'utf8')).join('\n');
const sitemapUrls = new Set([...sitemapText.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]));
const sitemapEntries = new Map([...sitemapText.matchAll(/<url>([\s\S]*?)<\/url>/g)].map(m => [m[1].match(/<loc>(.*?)<\/loc>/)?.[1], m[1]]));
const failures = [];
let profiles = 0;
let internalLinks = 0;
const organizationTypes = new Set(['Organization', 'School', 'CollegeOrUniversity', 'Hospital']);
const fail = (route, message) => failures.push(`${route}: ${message}`);
for (const file of htmlFiles) {
  const rel = path.relative(dist, file).split(path.sep).join('/');
  const route = rel === 'index.html' ? '/' : rel.endsWith('/index.html') ? `/${rel.slice(0,-10)}` : `/${rel}`;
  const html = readFileSync(file, 'utf8');
  const canonical = html.match(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/i)?.[1];
  const noindex = /<meta\b[^>]*name="robots"[^>]*content="[^"]*noindex/i.test(html);
  if (!noindex && canonical !== new URL(route, SITE.url).href) fail(route, `incorrect canonical: ${canonical}`);
  if (noindex && sitemapUrls.has(new URL(route, SITE.url).href)) fail(route, 'noindex page is included in sitemap');
  const category = CATEGORIES.find(c => route.startsWith(`/${c.slug}/`) && route !== `/${c.slug}/`);
  if (category) {
    profiles++;
    if (!sitemapUrls.has(new URL(route, SITE.url).href)) fail(route, 'published profile missing from sitemap');
    const source = path.join(root, 'src', 'content', category.collection, `${route.split('/')[2]}.md`);
    const fm = readFileSync(source, 'utf8').split(/^---\s*$/m)[1];
    const lastmod = sitemapEntries.get(new URL(route, SITE.url).href)?.match(/<lastmod>(.*?)<\/lastmod>/)?.[1];
    if (!lastmod) fail(route, 'profile frontmatter date missing from sitemap lastmod');
    const expectedDate = (fm.match(/^lastUpdated:[ \t]*["']?(\d{4}-\d{2}-\d{2})/m) ?? fm.match(/^published:[ \t]*["']?(\d{4}-\d{2}-\d{2})/m))?.[1];
    if (lastmod && lastmod.slice(0,10) !== expectedDate) fail(route, `sitemap lastmod ${lastmod} differs from profile date ${expectedDate}`);
    const entityType = fm.match(/^entityType:\s*(\w+)/m)?.[1];
    const graph = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)]
      .map(m => JSON.parse(m[1])).find(d => d['@graph'])?.['@graph'];
    const entity = graph?.[0];
    if (!entity) { fail(route, 'entity JSON-LD is missing'); continue; }
    if (['Event','CreativeWork'].includes(entityType) && entity['@type'] !== entityType) fail(route, `${entityType} rendered as ${entity['@type']}`);
    if (entity.foundingDate && !organizationTypes.has(entity['@type'])) fail(route, 'foundingDate emitted on a non-organization');
    if (entity.foundingDate && !/^\d{4}(?:-\d{2}(?:-\d{2})?)?$/.test(entity.foundingDate)) fail(route, `non-ISO foundingDate: ${entity.foundingDate}`);
    // No identity field exists in the content schema. Citations must not be inferred as identities.
    if (entity.sameAs) fail(route, 'sameAs inferred from citations without a verified identity field');
    if (['Person','CreativeWork','Event'].includes(entity['@type']) && entity.address) fail(route, 'profile country/location was inferred as a postal address');
  }
  for (const [, href] of html.matchAll(/<a\b[^>]*href="(\/[^"#?]*)(?:[?#][^"]*)?"/gi)) {
    if (href.startsWith('//')) continue;
    internalLinks++;
    const pathname = decodeURIComponent(href);
    const target = path.join(dist, pathname.replace(/^\//,''));
    if (!(existsSync(path.join(target, 'index.html')) || existsSync(target) && statSync(target).isFile())) fail(route, `internal link does not resolve: ${pathname}`);
  }
}
console.log(`HTML pages: ${htmlFiles.length}; profiles: ${profiles}; internal links: ${internalLinks}; errors: ${failures.length}`);
for (const failure of failures.slice(0,30)) console.error(failure);
if (failures.length > 30) console.error(`...and ${failures.length - 30} more errors`);
process.exitCode = failures.length ? 1 : 0;
