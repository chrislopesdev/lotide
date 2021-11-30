const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  // console.log(eqArrays(arr1, arr2));
  return eqArrays(arr1, arr2) ? console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`) : console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function(arr, callback) {
  const results = [];

  for (let item of arr) {
    results.push(callback(item));
  }

  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(map(words, x => x.length), [6, 7, 2, 5, 3]) // True
assertArraysEqual(map(words, x => x.length), [6, 7, 3, 5, 3]) // False
assertArraysEqual(map(words, x => x), [0, 1, 2, 3, 4]) // False

module.exports = map;