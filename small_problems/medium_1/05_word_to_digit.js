/*

Word to Digit

Write a function that takes a sentence string as an argument, and returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.

*/

/*
input: string containing numbers spelled out (str)
output: string with spelled numbers converted to corresponding numerals

rules:
    - replace case insensitively
    - replace only the whole words.

algorithm:
  - initialize an object for lookup from number strings to digits (lookup)
  - loop through the keys of the lookup object
    - in each iteration, replace each number string in str with the corresponding digit
  - return str
*/

function  wordToDigit(str) {
  var lookup = { 'zero': '0', 'one': '1', 'two': '2', 'three': '3', 'four': '4',
                 'five': '5', 'six': '6', 'seven': '7', 'eight': '9', 'nine': '9' };

  for (word in lookup) {
    str = str.replace(new RegExp('\\b' + word + '\\b', 'ig'), lookup[word]);
  }
  return str;
}

/*
Further Exploration

Can you refactor the function so that it does not use a loop?
*/
const LOOKUP = { 'zero': '0', 'one': '1', 'two': '2', 'three': '3', 'four': '4',
                  'five': '5', 'six': '6', 'seven': '7', 'eight': '9', 'nine': '9' };

function wordToDigit(str) {
  return str.replace(/\b.*?\b/g, function (wrd) {
    return Object.keys(LOOKUP).includes(wrd.toLowerCase()) ? LOOKUP[wrd.toLowerCase()] : wrd;
  });
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."
console.log(wordToDigit('zero Zero ZERO zErO.'));
// 0 0 0 0.
console.log(wordToDigit('onerous, twofold, fourth.'));
// onerous, twofold, fourth.
