/*

Substring (1)

Write a function that returns a substring of a string based on a starting index and length.
Examples

function substr(string, start, length) {
  // ...
}

var string = 'hello world';

substr(string, 2, 4);      // "llo "
substr(string, -3, 2);     // "rl"
substr(string, 8, 20);     // "rld"
substr(string, 0, -20);    // ""
substr(string, 0, 0);      // ""

  The start argument is the starting index. If negative, treat it as strLength + start where strLength is the length of the string. For example, if start is -3, treat it as strLength - 3.

  The length argument is the maximum length of the desired substring. If length exceeds the number of characters available, just use the available characters.
*/

/*
Inputs: str, start position, length
Output: substr starting at position and havnig length length

Algo:
  * check if position is non-negative
    if not, convert it to str.length + position
  * initialize var result to ''
  * calculate stop position: Math.min(str.length - 1, position + length - 1)
  * loop through str, starting from index position, stop at stop position
    concat str[i] to result
  * return result
*/

function substr(str, start, len) {
  var result = '';
  var stop;
  if (start < 0) start = str.length + start;
  stop = Math.min(str.length - 1, start + len - 1);

  for (i = start; i <= stop; i++) { result += str[i]; }
  return result;
}


var string = 'hello world';

console.log(substr(string, 2, 4));      // "llo "
console.log(substr(string, -3, 2));     // "rl"
console.log(substr(string, 8, 20));     // "rld"
console.log(substr(string, 0, -20));    // ""
console.log(substr(string, 0, 0));      // ""
