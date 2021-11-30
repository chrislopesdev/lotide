const takeUntil = require('../takeUntil');
const assert = require('chai').assert;

describe("#takeUntil", () => {
  it(`returns [1, 2, 5, 7, 2] for ([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0)`, () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    assert.deepEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);
  });
  
  it(`returns [1, 2, 5, 7, 2] for ([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0)`, () => {
    const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    assert.deepEqual(takeUntil(data2, x => x === ','), [ "I've", 'been', 'to', 'Hollywood' ]);
  });

});
