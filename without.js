const assertArraysEqual = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
    return;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
      return;
    }
  }
  console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  return;
};

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const without = function(source, itemsToRemove) {
  let withoutArray = [];
  // console.log(source, itemsToRemove);
  if (itemsToRemove.length === 0) {
    withoutArray = source;
    return withoutArray;
  }
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      withoutArray.push(source[i]);
    }
  }
  return withoutArray;
};

// TEST
console.log(without([1, 2, 3], [])); // => [1, 2, 3]
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;