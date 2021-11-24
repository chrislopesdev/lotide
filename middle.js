const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log(false);
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(false);
      return false;
    }
  }
  console.log(true);
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  console.log(eqArrays(arr1, arr2) ? `✅✅✅ Assertion Passed: ${arr1} === ${arr2}` : `🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
};

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

const middle = function(arr) {
  let tempArr = [];

  if (arr.length === 1 || arr.length === 2) {
    console.log(tempArr);
    return tempArr;
  } else if (arr.length % 2 === 0) {
    tempArr.push(arr[Math.floor(arr.length / 2 - 1)], arr[Math.floor(arr.length / 2)]);
    console.log(tempArr);
    return tempArr;
  } else {
    tempArr.push(arr[Math.ceil(arr.length / 2) - 1]);
    console.log(tempArr);
    return tempArr;
  }
};


// TEST CASES
middle([1]); // => []
middle([1, 2]); // => []

middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]

middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]

console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]));