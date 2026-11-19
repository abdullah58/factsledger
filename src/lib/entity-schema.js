const schemaTypes = {
  School: 'School', University: 'CollegeOrUniversity', College: 'CollegeOrUniversity',
  Person: 'Person', Organization: 'Organization', TrainStation: 'TrainStation',
  ReligiousSite: 'PlaceOfWorship', Hospital: 'Hospital', Place: 'Place',
  Event: 'Event', CreativeWork: 'CreativeWork', Species: 'Taxon',
};
const organizations = new Set(['School', 'University', 'College', 'Organization', 'Hospital']);
const places = new Set(['TrainStation', 'ReligiousSite', 'Place']);

/** Preserve the source's precision; prose and date ranges are not ISO dates. */
export function isIsoDate(value) {
  if (typeof value !== 'string' || !/^\d{4}(?:-\d{2}(?:-\d{2})?)?$/.test(value)) return false;
  const [year, month = 1, day = 1] = value.split('-').map(Number);
  const parsed = new Date(`${value.slice(0, 4)}-${String(month).padStart(2,'0')}-${String(day).padStart(2,'0')}T00:00:00Z`);
  return parsed.getUTCFullYear() === year && parsed.getUTCMonth() + 1 === month && parsed.getUTCDate() === day;
}

/** Build only fields whose meaning is established by the profile's content model. */
export function buildEntitySchema(data, pageUrl, image) {
  const entity = {
    '@type': schemaTypes[data.entityType] ?? 'Thing',
    name: data.title,
    description: data.summary,
    url: pageUrl,
  };
  // Country on a person/work/event is not a mailing address. Keep its meaning in the visible facts.
  if (data.location && (organizations.has(data.entityType) || places.has(data.entityType))) {
    entity.address = { '@type': 'PostalAddress', addressLocality: data.location, addressCountry: data.country };
  }
  if (organizations.has(data.entityType) && isIsoDate(data.established)) entity.foundingDate = data.established;
  if (image) entity.image = image;
  // A first-party citation can be a press release, filing, or a different entity's page.
  // It does not establish a sameAs identity. Citation metadata remains on the Article.
  return entity;
}
