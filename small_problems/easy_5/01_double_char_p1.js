/*

Double Char Part 1

Write a function that takes a string, doubles every character in the string, and returns the result as a new string.

Examples:

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""

*/

function repeater(str) {
  var resultArr = [];
  var i;

  for (i = 0; i < str.length; i += 1) { resultArr.push(str[i], str[i]); }
  return resultArr.join('');
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""
