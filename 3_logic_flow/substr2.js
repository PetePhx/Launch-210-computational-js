/*

Substring (2)

This practice problem is similar to the previous one. This time though, both arguments are indices of the provided string. The following rules apply:

  If both start and end are positive integers, start is less than end, and both are within the boundary of the string, return the substring from the start index (inclusive), to the end index (NOT inclusive).
  If the value of start is greater than end, swap the values of the two, then return the substring as described above.
  If start is equal to end, return an empty string.
  If end is omitted, the end variable inside the function isundefined. Return the substring starting at position start up through (and including) the end of the string.
  If either start or end is less than 0 or NaN, treat it as 0.
  If either start or end is greater than the length of the string, treat it as equal to the string length.

Examples

function substring(string, start, end) {
  // ...
}

var string = 'hello world';

substring(string, 2, 4);    // "ll"
substring(string, 4, 2);    // "ll"
substring(string, 0, -1);   // ""
substring(string, 2);       // "llo world"
substring(string, 'a');     // "hello world"
substring(string, 8, 20);   // "rld"
*/

/*
Inputs: string, start, stop
Output: substring, from start (inclusive) to stop (exclusive)

Algo:
  if stop is undefined, set stop to str.length
  if start or stop is NaN, set to 0

  initialize variable result to ''

  beginPos = Math.min(start, stop);
  endPos = Math.max(start, stop)

  loop through the string, from beginPos to endPos
    if str[i] is not undefined, result += str[i]

  return result
*/

function substring(str, start, stop) {
  var result = '';
  var beginPos;
  var endPos;

  if (start > str.length) start = str.length;
  if (stop === undefined || stop > str.length) stop = str.length;
  if (isNaN(start) || start < 0) start = 0;
  if (isNaN(stop) || stop < 0) stop = 0;

  beginPos = Math.min(start, stop);
  endPos = Math.max(start, stop);

  for (var i = beginPos; i < endPos; i++) { result += str[i]; }

  return result;
}

var string = 'hello world';

console.log(substring(string, 2, 4));    // "ll"
console.log(substring(string, 4, 2));    // "ll"
console.log(substring(string, 0, -1));   // ""
console.log(substring(string, 2));       // "llo world"
console.log(substring(string, 'a'));     // "hello world"
console.log(substring(string, 8, 20));   // "rld"
console.log(substring(string, -40, 50));   // "hello world"
