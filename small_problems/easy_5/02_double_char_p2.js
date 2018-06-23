/*

Double Char Part 2

Write a function that takes a string, doubles every consonant character in the string, and returns the result as a new string. The function should not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.

Examples:

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""

*/

function isConsonant(char) {
  var ch = char.toLowerCase();
  return (ch >= 'b' && ch <= 'z' && ch !== 'e' && ch !== 'i' && ch !== 'o' && ch !== 'u');
}

function doubleConsonants(str) {
  return Array.from(str, chr => chr + (isConsonant(chr) ? chr : '')).join('');
}

// using map

function doubleConsonants(str) {
  return str.split('').map(chr => chr + (isConsonant(chr) ? chr : '')).join('');
}

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""
