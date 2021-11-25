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

// test cases
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

const data3 = [1, 2, 3, 4, 5];
assertArraysEqual(takeUntil(data3, x => x > 4), [1, 2, 3, 4]); // true
assertArraysEqual(takeUntil(data3, x => x > 4), [1, 2, 3]); // false