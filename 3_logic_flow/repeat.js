/*
Repeating Strings

Implement a function that takes a string and a number times as arguments. The function should return the string repeated times number of times. If times is not a number, return undefined. If it is a negative number, return undefined also. If times is 0, return an empty string. You may ignore the possibility that times is a number that isn't an integer.

function repeat(string, times) {
  // ...
}

repeat('abc', 1);       // "abc"
repeat('abc', 2);       // "abcabc"
repeat('abc', -1);      // undefined
repeat('abc', 0);       // ""
repeat('abc', 'a');     // undefined
repeat('abc', false);   // undefined
repeat('abc', null);    // undefined
repeat('abc', '  ');    // undefined

You may concatenate strings, but you may not use any other properties or methods from JavaScript's built-in String class.
*/

/*
Inputs: string, number
Output: repeated string, or undefined

Algo:
  * validate input repeate number num. return undefined for negative/non-numeric
  * for num === 0, return ''
  * loop num times, concatanate str in each oteration
  * return the result
*/

function repeat(str, num) {
  var result = '';
  if (typeof(str) !== 'string' || typeof(num) !== 'number' || num < 0) return undefined;
  if (num === 0) return '';

  for (var i = 1; ; i++) {
    result += str;
    if (i === num) return result;
  }
}

console.log(repeat('abc', 1));       // "abc"
console.log(repeat('abc', 2));       // "abcabc"
console.log(repeat('abc', -1));      // undefined
console.log(repeat('abc', 0));       // ""
console.log(repeat('abc', 'a'));     // undefined
console.log(repeat('abc', false));   // undefined
console.log(repeat('abc', null));    // undefined
console.log(repeat('abc', '  '));    // undefined
console.log(repeat(123, 123));    // undefined
