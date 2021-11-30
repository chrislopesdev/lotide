const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

describe("#eqObjects", () => {
  it(`returns true for { a: "1", b: "2" } & { a: "1", b: "2" }`, () => {
    assert.strictEqual(eqObjects({ a: "1", b: "2" }, { a: "1", b: "2" }), true);
  });

  it(`returns false for { a: [1, 2, 3], b: [1, 2, 3]} & { a: [1, 2, 3], b: [1, 2]}`, () => {
    assert.strictEqual(eqObjects({ a: [1, 2, 3], b: [1, 2, 3]}, { a: [1, 2, 3], b: [1, 2]}), false);
  });

});
