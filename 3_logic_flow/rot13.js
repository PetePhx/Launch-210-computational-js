/*
Code Review: Rot13 Cipher

After completing this practice problem, post your solution as a Code Review in this lesson's forums.

Rot13 ("rotate by 13 places") is a letter-substitution cipher that translates a String into a new String:

For each character in the original String:

  If the character is a letter in the modern English alphabet, change it to the character 13 positions later in the alphabet. So a becomes n. If you reach the end of the alphabet, return to the beginning. So o becomes b.
  Letter transformations preserve case. A becomes N while a becomes n.
  Don't modify characters that are not letters.

Write a Function, rot13, that takes a String and returns that String transformed by the rot13 cipher.

console.log(rot13('Teachers open the door, but you must enter by yourself.'));

// logs:
Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.

It's worth noting that rot13 applied twice results in the original string:

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));

// logs:
Teachers open the door, but you must enter by yourself.

This happens since there are 26 characters in the modern English alphabet: 2 sets of 13.
*/

/*
Input: string
Output: string where the alphabetic characters are rotated by 13 positions

Algo:
  * initialize var result to ''
  * loop through string characters
    * for chars 'A' to 'Z', do rotation by 13, base 26, offset 65
    * for chars 'a' to 'z', do rotation by 13, base 26 offset 97
    * all other chars, add to result as is
  * return result
*/

// rotate the number num by rot steps in a base with certain offset
function rotOffset(num, rot, base, offset) {
  return (((num - offset) + rot) % base) + offset;
}

function rot13(str) {
  var result = '';
  var chr = '';
  var newChr = '';
  var UPPER_OFFSET = 'A'.charCodeAt(0);
  var LOWER_OFFSET = 'a'.charCodeAt(0);
  var BASIS = 26; // alphabet length

  for (var i = 0; i < str.length; i++) {
    chr = str[i];
    if (chr >= 'A' && chr <= 'Z') {
      newChr= String.fromCharCode(rotOffset(chr.charCodeAt(0), 13, BASIS, UPPER_OFFSET));
    } else if (chr >= 'a' && chr <= 'z') {
      newChr= String.fromCharCode(rotOffset(chr.charCodeAt(0), 13, BASIS, LOWER_OFFSET));
    } else {
      newChr= str[i];
    }
    result += newChr;
  }

  return result;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));
console.log(rot13(''));
console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));
