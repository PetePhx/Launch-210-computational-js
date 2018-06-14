/*
Splitting a String

Write a function that takes two arguments:

  a string to be split
  a delimiter character

The function logs the split strings to the console, as shown below:
Examples

function splitString(string, delimiter) {
  // ...
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello
*/

/*
Input: string, delimiter
Output: log the substrings

Algo:
  * spacial case of empty delimiter
    log individual characters of the empty str
  * set the substring to empty ''
  * loop through each character of the string:
    * if char === demilieter:
        log the substring,
        set the substring to ''
      else:
        add the char to the substring
  if substring is not empty, log it
*/

function splitString(str, delim) {
  var substr = '';

  if (delim === '') {
    for (var i = 0; i < str.length; i++) { console.log(str[i]); }
    return;
  } else if (delim === undefined) {
    console.log('ERROR: no delimiter!');
    return;
  }

  for (var i = 0; i < str.length; i++) {
    if (str[i] === delim) {
      console.log(substr);
      substr = '';
    } else {
      substr += str[i];
    }
  }

  if (substr) console.log(substr);
}

splitString('hello', '');

splitString('abc,123,hello world', ',');

splitString('hello');

splitString('hello', ';');

splitString(';hello;', ';');
