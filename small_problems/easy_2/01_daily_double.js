/*

Ddaaiillyy ddoouubbllee

Write a function that takes a string argument, and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.

Examples:

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""

*/

/*
input: str
ouput: another string, with consequtive repeated characters collapsed to one

algo:
  * initialize result to ''.
  * if empty str, return result
  * initialize current character curChar to str[0], add to result
  * loop through string characters
    * compare str[i] with curChar
      * if the same, skip the iteration
      * else, update curChar, add to result
  * return result
*/

function crunch(str) {
  var result = '';
  var curChar = '';

  for (var i = 0; i < str.length; i++) {
    if (str[i] === curChar) {
      continue;
    } else {
      curChar = str[i];
      result += curChar;
    }
  }

  return result;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""

/*
Further Exploration

It's also possible to solve this using regular expressions. For a nice challenge, give this a try with regular expressions. Can you think of any other solutions that don't use regular expressions?
*/

function crunch2(str) {
  return str.replace(/(.)\1*/g, '$1'); // or use regex /(.)\1+/g
}

console.log(crunch2('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch2('4444abcabccba'));              // "4abcabcba"
console.log(crunch2('ggggggggggggggg'));            // "g"
console.log(crunch2('a'));                          // "a"
console.log(crunch2(''));                           // ""
