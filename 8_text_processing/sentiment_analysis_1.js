/*
Implement a function that takes some text as an argument and logs some information about whether the text has a positive, negative, or neutral sentiment.

*/

var positiveWords = ['fortune', 'dream', 'love', 'respect', 'patience', 'devout', 'noble', 'resolution'];
var negativeWords = ['die', 'heartache', 'death', 'despise', 'scorn', 'weary', 'trouble', 'oppress'];

function sentiment(text) {
  var wordsArr = text.toLowerCase()
                     .split(/\b/)
                     .filter(wrd => /\w+/.test(wrd));
  var posCount = wordsArr.reduce((acc, wrd) => acc + (positiveWords.includes(wrd) ? 1 : 0), 0);
  var negCount = wordsArr.reduce((acc, wrd) => acc + (negativeWords.includes(wrd) ? 1 : 0), 0);
  return [
    posCount,
    negCount,
    posCount === negCount ? 'Neutral' : (posCount > negCount ? 'Positive' : 'Negative')];
}
