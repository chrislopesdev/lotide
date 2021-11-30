const map = require('../map');
const assert = require('chai').assert;

describe("#map", () => {
  it(`returns [6, 7, 2, 5, 3] for ["ground", "control", "to", "major", "tom"]`, () => {
    const words = ["ground", "control", "to", "major", "tom"];
    assert.deepEqual(map(words, x => x.length), [6, 7, 2, 5, 3]);
  });
  
  it(`returns [4, 6, 8] for [2, 3, 4]`, () => {
    const numbers = [2, 3, 4];
    assert.deepEqual(map(numbers, x => x * 2), [4, 6, 8]);
  });

});