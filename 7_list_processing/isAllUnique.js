/*
Implement a function that determines whether a string has any character that appears more than once. The function should return true if, and only if, all characters in the string are unique. We should ignore multiple spaces and case differences; focus instead on the non-space characters without regard to case.
*/

// using regex
function isAllUnique(str) {
  return !str.match(/(\S).*\1/i);
}

//using loop
function isAllUnique(str) {
  var freq = {};
  var arr = str.toLowerCase().replace(/\s/, '').split('');
  var i;
  for (i = 0; i < arr.length; i++) {
    if (freq[arr[i]] === undefined) {
      freq[arr[i]] = 1;
    } else {
      return false;
    }
  }
  return true;
}

isAllUnique('The quick brown fox jumped over a lazy dog');  // false
isAllUnique('123,456,789');                                 // false
isAllUnique('The big apple');                               // false
isAllUnique('The big apPlE');                               // false
isAllUnique('!@#$%^&*()');                                  // true
isAllUnique('abcdefghijklmnopqrstuvwxyz');                  // true
