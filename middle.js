const middle = function(arr) {
  let tempArr = [];

  if (arr.length === 1 || arr.length === 2) {
    // console.log(tempArr);
    return tempArr;
  } else if (arr.length % 2 === 0) {
    tempArr.push(arr[Math.floor(arr.length / 2 - 1)], arr[Math.floor(arr.length / 2)]);
    // console.log(tempArr);
    return tempArr;
  } else {
    tempArr.push(arr[Math.ceil(arr.length / 2) - 1]);
    // console.log(tempArr);
    return tempArr;
  }
};

module.exports = middle;
