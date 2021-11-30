const without = function(source, itemsToRemove) {
  let withoutArray = [];
  // console.log(source, itemsToRemove);
  if (itemsToRemove.length === 0) {
    withoutArray = source;
    return withoutArray;
  }
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      withoutArray.push(source[i]);
    }
  }
  return withoutArray;
};

module.exports = without;