const assertEqual = require('./assertEqual');

const head = function(arr) {
  if (arr === []) {
    console.log(arr);
    return undefined;
  } else {
    return arr[0];
  }
};

module.exports = head;