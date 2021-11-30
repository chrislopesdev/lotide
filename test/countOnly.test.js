const countOnly = require('../countOnly');
const assert = require('chai').assert;

describe('#countOnly', () => {
  it('returns { Jason: 1 } for { "jason": true }', () => {
    assert.deepEqual(countOnly(firstNames, {"Jason": true}), {Jason: 1});
  });
  
  it('returns { Fang: 2 } for { "Fang": true }', () => {
    assert.deepEqual(countOnly(firstNames, {"Fang": true}), {Fang: 2})
  });

  it('returns undefined for { "Karima": true }', () => {
    assert.deepEqual(countOnly(firstNames, {"Karima": true}), undefined)
  });
});



// TEST CODE
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);