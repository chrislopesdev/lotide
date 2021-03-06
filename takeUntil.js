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

module.exports = takeUntil;