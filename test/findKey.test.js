const findKey = require('../findKey');
const assert = require('chai').assert;

describe("#findKey", () => {
  it(`returns 'noma' for (obj, x => x.stars === 2)`, () => {
    const obj = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};
    assert.deepEqual(findKey(obj, x => x.stars === 2), "noma");
  });
  
  it(`returns 'noma' for (obj, x => x.stars === 2)`, () => {
    const obj = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};
    assert.deepEqual(findKey(obj, x => x.stars === 5), undefined);
  });

});