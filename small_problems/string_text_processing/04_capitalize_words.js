/*

Capitalize Words

Write a function that takes a string as an argument, and returns that string with the first character of every word capitalized and all subsequent characters in lowercase.

You may assume that a word is any sequence of non-whitespace characters.

*/


// not preserving the shape of whitespaces
function wordCap(str) {
  return str.split(' ')
            .map(wrd => wrd[0].toUpperCase() + wrd.slice(1).toLowerCase())
            .join(' ');
}

// preserving whitespaces
function wordCap(str) {
  var startWhite = str.match(/^\s+/);
  var wordsArr = str.match(/\S+\s*/g)
                    .map(wrd => wrd[0].toUpperCase() + wrd.slice(1).toLowerCase());
  return (startWhite ? startWhite : '') + wordsArr.join('');
}

// simpler solution preserving whitespaces
function wordCap(str) {
  return str.toLowerCase()
            .replace(/(^|\s)\w/g, char => char.toUpperCase());
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'
console.log(wordCap(' this  is a \n  "quoted" word'));    // ' This  Is A \n  "quoted" Word'
