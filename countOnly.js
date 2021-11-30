const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  // if object is empty, return undefined.
  if (Object.keys(results).length === 0) {
    return undefined;
  } else {
    return results;
  }
};

module.exports = countOnly;