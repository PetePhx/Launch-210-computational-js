/*
Index of Substring

Write two functions that each take two strings as arguments. Their expected behaviors are as follows:

  The indexOf() function searches for the first instance of a substring in firstString that matches the string secondString, and returns the index of the character where that substring begins.

  The lastIndexOf() function searches for the last instance of a substring in firstString that matches the string secondString, and returns the index of the character where that substring begins.

  Both functions return -1 if firstString does not contain the substring specified by secondString.

Examples:

function indexOf(firstString, secondString) {
  // statements
}

function lastIndexOf(firstString, secondString) {
  // statements
}

indexOf('Some strings', 's');                      // 5
indexOf('Blue Whale', 'Whale');                    // 5
indexOf('Blue Whale', 'Blute');                    // -1
indexOf('Blue Whale', 'leB');                      // -1

lastIndexOf('Some strings', 's');                  // 11
lastIndexOf('Blue Whale, Killer Whale', 'Whale');  // 19
lastIndexOf('Blue Whale, Killer Whale', 'all');    // -1

You may use the square brackets ([]) to access a character by index (as shown below), and the length property to find the string length. However, you may not use any other properties or methods from JavaScript's built-in String class.

'hello'[0];    // "h"
'hello'[4];    // "o"
*/

function indexOf(str1, str2) {
  var len1 = str1.length;
  var len2 = str2.length;
  var match;
  for (var i = 0; i <= len1 - len2; i++) {
    match = true;
    for (var j = 0; j < len2; j++) { // loop through the substr
      if (str1[i + j] !== str2[j]) { // first point of difference
        match = false;
        break;
      }
    }
    if (match === true) return i;
  }
  return -1;
}

console.log(indexOf('Some strings', 's'));                      // 5
console.log(indexOf('Blue Whale', 'Whale'));                    // 5
console.log(indexOf('Blue Whale', 'Blute'));                    // -1
console.log(indexOf('Blue Whale', 'leB'));                      // -1

function lastIndexOf(str1, str2) {
  var len1 = str1.length;
  var len2 = str2.length;
  var match;
  for (var i = len1 - len2; i >= 0; i--) { // the only change from indexOf()
    match = true;
    for (var j = 0; j < len2; j++) {
      if (str1[i + j] !== str2[j]) {
        match = false;
        break;
      }
    }
    if (match === true) return i;
  }
  return -1;
}

console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1
