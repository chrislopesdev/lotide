const assertEqual = require('./assertEqual');

const tail = function(arr) {
  let tempArr = [];
  if (arr.length === 0 || arr.length === 1) {
    return [];
  } else {
    for (let i = 1; i < arr.length; i++) {
      tempArr.push(arr[i]);
    }
  }
  return tempArr;
};

console.log(tail([]))

module.exports = tail;