/*

ASCII String Value

Write a function that determines and returns the ASCII string value of a string passed in as an argument. The ASCII string value is the sum of the ASCII values of every character in the string. (You may use String.prototype.charCodeAt() to determine the ASCII value of a character.)

Examples:

asciiValue('Four score');         // 984
asciiValue('Launch School');      // 1251
asciiValue('a');                  // 97
asciiValue('');                   // 0

*/

/*
input: str
output: some of ascii values for each char
algo:
  * initialize var sum = 0;
  * loop through each char
    * add ascii value to sum
  * return sum
*/

function asciiValue(str) {
  var sum = 0;

  for (var i = 0; i < str.length; i++) { sum += str.charCodeAt(i); }

  return sum;
}

console.log(asciiValue('Four score'));         // 984
console.log(asciiValue('Launch School'));      // 1251
console.log(asciiValue('a'));                  // 97
console.log(asciiValue(''));                   // 0
