/*
Trimming Spaces

Write a function that takes a string as an argument, and returns the string stripped of spaces from both ends. Do not remove or alter internal spaces.
Example

trim('  abc  ');  // "abc"
trim('abc   ');   // "abc"
trim(' ab c');    // "ab c"
trim(' a b  c');  // "a b  c"
trim('      ');   // ""
trim('');         // ""

You may use the square brackets ([]) to access a character by index (as shown below), and the length property to find the string length. However, you may not use any other properties or methods from JavaScript's built-in String class.

'hello'[0];       // "h"
'hello'[4];       // "o"
*/

/*
Input: string (can be empty)
Output: string without the leading/trailing white spaces

Algorithm:
  * find the first non-empty space letter index
    iterate through each letter startgin starting from 0 index
      if non-empty, record the index (idx1), break
  * find the last non-empty-space letter index
    iterate through each letter startgin starting from the last index
      if non-empty, record the index (idx2), break

  * copy the string chars from idx1 to idx2 to a new string, return it
*/

function trim(str) {
  var len = str.length;
  var trimStr = '';

  for (var idx1 = 0; idx1 < len; idx1++ ) {
    if (str[idx1] !== ' ') break;
  }

  for (var idx2 = len - 1; idx2 >= 0; idx2--) {
    if (str[idx2] !== ' ') break;
  }

  for (var i = idx1; i <= idx2; i++) {
    trimStr += str[i];
  }

  return trimStr;
}

console.log(trim('  abc  '));  // "abc"
console.log(trim('abc   '));   // "abc"
console.log(trim(' ab c'));    // "ab c"
console.log(trim(' a b  c'));  // "a b  c"
console.log(trim('      ') === '');   // ""
console.log(trim('') === '');         // ""
