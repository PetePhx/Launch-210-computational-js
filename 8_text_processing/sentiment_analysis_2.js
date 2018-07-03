/*

Sentiment Analysis 2

Re-implement the sentiment analysis with regex-based positive and negative word lists. The use of regex to process text-based data is extremely powerful. In the previous practice problem, we did not count words that were just different forms of the words in the positive and negative word lists. For instance, we didn't count "scorns" since it isn't an exact match for "scorn".

We could add the variations of each word; for example: fortune --> fortunes, respect --> respected, oppress --> oppressed, or death --> deaths. This works, but we can use regex to make the relationship between variants more evident:

*/

var positiveRegex = /(fortunes?)|(dream(s|t|ed)?)|(love(s|d)?)|(respect(s|ed)?)|(patien(ce|t)?)|(devout(ly)?)|(nobler?)|(resolut(e|ion)?)/i;
var negativeRegex = /(die(s|d)?)|(heartached?)|(death)|(despise(s|d)?)|(scorn(s|ed)?)|(weary)|(troubles?)|(oppress(es|ed|or('s)?)?)/i;

// NOTE: removed the regex global flag (g) in order to use method test()

function sentiment(text) {
  var wordsArr = text.split(/\b/)
                     .filter(wrd => /\w+/.test(wrd));

  var posCount = wordsArr.reduce((acc, wrd) => acc + (positiveRegex.test(wrd) ? 1 : 0), 0);
  var negCount = wordsArr.reduce((acc, wrd) => acc + (negativeRegex.test(wrd) ? 1 : 0), 0);
  return [
    posCount,
    negCount,
    posCount === negCount ? 'Neutral' : (posCount > negCount ? 'Positive' : 'Negative')];
}

// Alternatively, using String match() instead of Regexp test():

positiveRegex = /(fortunes?)|(dream(s|t|ed)?)|(love(s|d)?)|(respect(s|ed)?)|(patien(ce|t)?)|(devout(ly)?)|(nobler?)|(resolut(e|ion)?)/ig;
negativeRegex = /(die(s|d)?)|(heartached?)|(death)|(despise(s|d)?)|(scorn(s|ed)?)|(weary)|(troubles?)|(oppress(es|ed|or('s)?)?)/ig;

// NOTE: added the regex global flag (g) in order to use method match()

function sentiment(text) {
  var posCount = text.match(positiveRegex).length;
  var negCount = text.match(negativeRegex).length;

  return [
    posCount,
    negCount,
    posCount === negCount ? 'Neutral' : (posCount > negCount ? 'Positive' : 'Negative')];
}

console.log(sentiment('fortune, dreamed; Love. Death. died. Scorned')); //[ 3, 3, 'Neutral' ]
