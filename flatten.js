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
  return result;
};

module.exports = flatten;