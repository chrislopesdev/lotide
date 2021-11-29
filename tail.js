const assertEqual = require('./assertEqual');

const tail = function(arr) {
  const tempArr = [];
  if (arr === []) {
    return [];
  } else {
    for (let i = 1; i < arr.length; i++) {
      tempArr.push(arr[i]);
    }
  }
  return tempArr;
};

module.exports = tail;