/*

Uppercase Check

Write a function that takes a string argument, and returns true if all of the alphabetic characters inside the string are uppercase; false otherwise. Ignore characters that are not alphabetic.

*/

function isUppercase(str) {
  return str.split('').every(char => char === char.toUpperCase());
}

// or simply

function isUppercase(str) {
  return str === str.toUpperCase();
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true
console.log(isUppercase('GÜNTER GRASS'));    // true
