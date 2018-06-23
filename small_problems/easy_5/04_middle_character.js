/*

Get the Middle Character

Write a function that takes a non-empty string argument, and returns the middle character(s) of the string. If the string has an odd length, you should return exactly one character. If the string has an even length, you should return exactly two characters.

Examples:

centerOf('I Love Ruby');      // "e"
centerOf('Launch School');    // " "
centerOf('Launch');           // "un"
centerOf('Launchschool');     // "hs"
centerOf('x');                // "x"

*/

function centerOf(str) {
  var len = str.length;
  if (len < 2) return str;
  return str.substr(Math.ceil(len / 2 - 1), (len % 2 === 0 ? 2 : 1));
}

centerOf('I Love Ruby');      // "e"
centerOf('Launch School');    // " "
centerOf('Launch');           // "un"
centerOf('Launchschool');     // "hs"
centerOf('x');                // "x"
