const flatten = require('../flatten');
const assert = require('chai').assert;

describe('#flatten', () => {
  it("returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

  it("returns [['one'], 'two', ['green', 'blue']] for ['one', 'two', 'green', 'blue']", () => {
    assert.deepEqual(flatten([['one'], 'two', ['green', 'blue']]), ['one', 'two', 'green', 'blue']);
  });

});