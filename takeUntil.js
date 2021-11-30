// const eqArrays = function(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// const assertArraysEqual = function(arr1, arr2) {
//   // console.log(eqArrays(arr1, arr2));
//   return eqArrays(arr1, arr2) ? console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`) : console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
// };

const takeUntil = function(array, callback) {
  let results = [];

  for (let item of array) {
    if (callback(item)) {
      // console.log(item)
      return results;
    } else {
      results.push(item);
    }
  }
  return results;
};

module.exports = takeUntil;