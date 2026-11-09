# Publication checks

Run these checks before publishing content or changing shared layouts:

```sh
npm ci
npm run test:unit
npm run test:interlinks
npm run check:interlinks
npm run build:site
npm run check:seo
```

`build:site` builds all pages and validates the content schema without downloading optional hero images. `npm run build` remains the production command: it downloads images, builds the pages, then audits the resulting HTML. CI runs the same content checks without the image download.

The generated-output check verifies canonical URLs, profile sitemap coverage and lastmod dates, exclusion of noindex pages from the sitemap, internal link destinations, and the corrected entity schema rules. It catches layout regressions across all published pages, including links to draft pages that have no output route. Frontmatter date extraction recognizes complete YAML delimiter lines, so `---` inside a source URL cannot truncate the metadata; Coinbase's source URL previously triggered this bug.

The entity schema deliberately does not infer `sameAs` from citation order or source tier. A first-party earnings release, partner announcement, or filing is a citation, not necessarily an identity page. Event and creative-work profiles retain their declared type. Country and location on a person, event, work or taxon do not become a postal address. Organizational founding dates are emitted only when the existing value is a valid ISO year, year-month, or date; prose and date ranges stay in the visible facts.

These checks establish properties of the built files, not Google's crawl decisions or rankings. A successful build does not verify every editorial claim, confirm production HTTP responses, or establish that a deployment succeeded. Source-backed contextual links and claim-by-claim review remain editorial work.

When correcting an advance announcement, preserve its temporal scope: a scheduled screening or promotional visit is a plan unless a later source confirms it occurred. Distinguish limited screenings, general theatrical releases, Oscar submissions, and nominations. Preserve existing URLs and sourced entity links when making corrections; update `lastUpdated` only on materially edited profiles.

References: [Google's link guidance](https://developers.google.com/search/docs/crawling-indexing/links-crawlable), [sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap), [crawl budget guidance](https://developers.google.com/crawling/docs/crawl-budget), [Schema.org sameAs](https://schema.org/sameAs), [foundingDate](https://schema.org/foundingDate), [Date](https://schema.org/Date).
