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

const flatten = function(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      result.push(arr[i]);
    } else {
      // console.log(arr[i]);
      for (let j = 0; j < arr[i].length; j++) {
        result.push(arr[i][j]);
      }
    }
  }
  console.log({result});
};

// test
flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]
