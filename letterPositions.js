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

module.exports = letterPositions;