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

const letterPositions = function(sentence) {
  let results = {};
  let sentenceArr = sentence.split('');
  // console.log(sentenceArr);
  for (let i = 0; i < sentenceArr.length; i++) {
    if ([sentenceArr[i]] in results) {
      results[sentenceArr[i]].push(i);
    } else {
      results[sentenceArr[i]] = [i];
    }
  }
  return results;
};

console.log(letterPositions('hello'));

assertArraysEqual(letterPositions('hello'),
  {
    h: [0],
    e: [1],
    l: [2, 3],
    o: [4]
  }
);