/*

Now I Know My ABCs

A collection of spelling blocks has two letters per block, as shown in this list:

B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

This limits the words you can spell with the blocks to only those words that do not use both letters from any given block. You can also only use each block once.

Write a function that takes a word string as an argument, and returns true if the word can be spelled using the set of blocks, or false otherwise. You can consider the letters to be case-insensitive when you apply the rules.

*/

/*

-input: word (string)
-output: boolean: whether or not the word/string can be spelled by using at most one letter from each block of letters

-algorithm:
  - represent the letter blocks in a data structure: object

  - map each letter of the string to the index in the block object
  - check whether or not a value is repeated in the index array
    - return true/false accordingly
*/

var LETTER_BLOCK = { 'B': 1, 'O': 1, 'X': 2, 'K': 2, 'D': 3, 'Q': 3, 'C': 4,
                     'P': 4, 'N': 5, 'A': 5, 'G': 6, 'T': 6, 'R': 7, 'E': 7,
                     'F': 8, 'S': 8, 'J': 9, 'W': 9, 'H': 10, 'U': 10,
                     'V':11, 'I': 11, 'L': 12, 'Y': 12, 'Z': 13, 'M': 13 };

function isBlockWord(str) {
  var cleanStr = str.toUpperCase()
                    .replace(/[^A-Z]/g, '');
  var ltrArr = cleanStr.split('')
                       .map(chr => LETTER_BLOCK[chr]);
  for (var i = 0; i < ltrArr.length; i++) {
    if (ltrArr.lastIndexOf(ltrArr[i]) > ltrArr.indexOf(ltrArr[i])) return false;
  }

  return true;
}


console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
