import test from 'node:test';
import assert from 'node:assert/strict';
import { extractLastmod } from '../src/lib/sitemap-dates.js';

test('URLs containing --- do not truncate frontmatter before the date', () => {
  const source = '---\nsources:\n  - url: https://example.com/company?source=rss----id---4\npublished: "2026-10-01"\nlastUpdated: "2026-10-03"\n---\nBody';
  assert.equal(extractLastmod(source),'2026-10-03');
});
test('prefers lastUpdated and preserves quoted dates with either line ending', () => {
  const source = '---\npublished: 2026-10-01\nlastUpdated: "2026-10-22"\n---\nBody';
  assert.equal(extractLastmod(source),'2026-10-22');
  assert.equal(extractLastmod(source.replaceAll('\n','\r\n')),'2026-10-22');
});
test('falls back to published without reading date-like body text', () => {
  assert.equal(extractLastmod('---\npublished: 2026-10-01\n---\nlastUpdated: 2099-01-01'),'2026-10-01');
  assert.equal(extractLastmod('---\ntitle: No dates\n---\nlastUpdated: 2099-01-01'),undefined);
  assert.equal(extractLastmod('lastUpdated: 2099-01-01'),undefined);
});
