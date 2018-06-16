/*
Stringy Strings

Write a function that takes one argument, a positive integer, and returns a string of alternating '1's and '0's, always starting with a '1'. The length of the string should match the given integer.

Examples:

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"

*/

function stringy(num) {
  var result = '';
  for (var i = 0; i < Math.floor(num / 2); i ++) { result += '10'; }
  if (num % 2 === 1) result += '1';
  return result;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"

// alternatively

function stringy(num) {
  return '10'.repeat(Math.floor(num / 2)) + (num % 2 === 1 ? '1' : ' ');
}
