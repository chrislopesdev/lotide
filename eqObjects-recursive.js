const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    // console.log(false);
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      // console.log(false);
      return false;
    }
  }
  // console.log(true);
  return true;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let key in object1) {
    // console.log(key, object1[key]);
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

console.log(`***************************`)
console.log(`Recursive Assertion Testing:`)
console.log(assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true)) // => true
console.log(assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false)) // => false
console.log(assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false)) // => false

console.log(`***************************`)
console.log(`Previous Assertion Testing:`)
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertEqual(eqObjects(ab, ba), true)); // => true

const objArr1 = { a: [1, 2, 3], b: [1, 2, 3]};
const objArr2 = { a: [1, 2, 3], b: [1, 2, 3]};
console.log(assertEqual(eqObjects(objArr1, objArr2), true)); // => false

const abc = { a: "1", b: "2", c: "3" };
console.log(assertEqual(eqObjects(ab, abc), false)); // => false

// eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }) // => true
// eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }) // => false
// eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }) // => false



// const eqArrays = require('./eqArrays');

// const eqObjects = function(object1, object2) {
//   let object1KeyArray = Object.keys(object1);
//   let object2KeyArray = Object.keys(object2);

//   if (object1KeyArray.length !== object2KeyArray.length) {
//     return false;
//   } else {

//     for (const keyName of object1KeyArray) {
//       if (Array.isArray(object1[keyName]) && Array.isArray(object2[keyName])) {
//         if(!eqArrays(object1[keyName], object2[keyName])) {
//           return false;
//         }
//       } else if (typeof object1[keyName] === 'object' && typeof object2[keyName] === 'object') {
//         if(!eqObjects(object1[keyName], object2[keyName])) {
//           return false;
//         }
//       } else {
//         if (object1[keyName] !== object2[keyName]) {
//           return false;
//         }
//       }
//     }
//     return true;
//   }
// };

// module.exports = eqObjects;