// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };
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

// working code
// const assertArraysEqual = function(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
//     return;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
//       return;
//     }
//   }
//   console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
//   return;
// };

assertArraysEqual([1, 2, 3], [1, 2, 3]) // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]) // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]) // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]) // => false


// assertEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]),true) // => true
// assertEqual(assertArraysEqual([1, 2, 3], [3, 2, 1]),false) // => false

// assertEqual(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]), true) // => true
// assertEqual(assertArraysEqual(["1", "2", "3"], ["1", "2", 3]), false); // => false