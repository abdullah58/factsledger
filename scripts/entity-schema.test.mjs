import test from 'node:test';
import assert from 'node:assert/strict';
import { buildEntitySchema, isIsoDate } from '../src/lib/entity-schema.js';

const profile = {title:'Example',summary:'Documented entity',country:'United States',location:'New York',established:'2020'};
test('financial press releases cannot silently become identity links', () => {
  const entity = buildEntitySchema({...profile,entityType:'Organization',sources:[{tier:'first-party',url:'https://example.com/results'}]},'https://factsledger.com/organizations/example/');
  assert.equal(entity.sameAs,undefined);
  assert.equal(entity.foundingDate,'2020');
  assert.equal(entity.address.addressLocality,'New York');
});
test('all supported entity types retain their semantic type', () => {
  const types = {School:'School',University:'CollegeOrUniversity',College:'CollegeOrUniversity',Person:'Person',Organization:'Organization',TrainStation:'TrainStation',ReligiousSite:'PlaceOfWorship',Hospital:'Hospital',Place:'Place',Event:'Event',CreativeWork:'CreativeWork',Species:'Taxon'};
  for (const [entityType,type] of Object.entries(types)) assert.equal(buildEntitySchema({...profile,entityType},'https://example.com/')['@type'],type);
});
test('nationality, event location and work origin do not become postal addresses or founding dates', () => {
  for (const entityType of ['Person','Event','CreativeWork','Species']) {
    const entity = buildEntitySchema({...profile,entityType},'https://example.com/');
    assert.equal(entity.address,undefined);
    assert.equal(entity.foundingDate,undefined);
  }
});
test('place opening dates are not organizational founding dates', () => {
  assert.equal(buildEntitySchema({...profile,entityType:'TrainStation'},'https://example.com/').foundingDate,undefined);
});
test('date precision and calendar validity are preserved', () => {
  for (const value of ['1900','2020-02','2020-02-29','0001-01-01']) assert.equal(isIsoDate(value),true,value);
  for (const value of ['c. 1900','1900 or 1901','2021-02-29','2020-13','2020-04-31','2020-00-01','2020-01-00','',undefined]) assert.equal(isIsoDate(value),false,String(value));
});
