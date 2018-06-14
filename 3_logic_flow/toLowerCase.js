/*
Converting Strings to Lower Case

Write a function that returns a string converted to lowercase.

To convert a single uppercase character to a lowercase character, get its ASCII numeric representation from the ASCII table, add 32 to that number, then convert the number back to a character using the same ASCII table. You can use the String.fromCharCode and the String.charCodeAt methods for these operations. For example:

var string = 'A';
asciiNumeric = string.charCodeAt(0);         // 65
asciiNumeric += 32;
string = String.fromCharCode(asciiNumeric);  // "a", converted to lowercase

Examples

function toLowerCase(string) {
  // ...
}

toLowerCase('ALPHABET');    // "alphabet"
toLowerCase('123');         // "123"
toLowerCase('abcDEF');      // "abcdef"
*/

/*
Input: String (str)
Ouput: String in lowercase characters (for alphabetic chars)
Algo:
  * initialize empty str result
  * loop though str characters
      check if str.charCodeAt(i) is between 65 and 90 (inclusive)
        if true,
          add 32 to charCode,
          conver to char using fromCharCode
          concatanate to result
        else
          concatanate str[i] to result
  * return results
*/

function toLowerCase(str) {
  var OFFSET = 32;
  var result = '';
  var code;

  for ( i = 0; i < str.length; i++) {
    code = str.charCodeAt(i);
    if (code >= 65 && code <= 90) { // A: 65, Z: 90
      result += String.fromCharCode(code + OFFSET);
    } else {
      result += str[i];
    }
  }

  return result;
}

console.log(toLowerCase('ALPHABET'));    // "alphabet"
console.log(toLowerCase('123'));         // "123"
console.log(toLowerCase('abcDEF'));      // "abcdef"
