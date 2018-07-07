/*

Write a progrm that can clean up the user-entered phone number.

Get rid of any non-didgit chars (dash, dot, space, parentheses)

if less than 10 digits or more than 11 digits, bad number (return 0000000000)

if 11 digits, with first digit 1, return the last 10 digits. otherwise, bad number.

*/

/*
input: string containing a phone number, possibly other characters.

output: return the 10-digit number in string format

algorithm:
  - remove all the special characters from the input str (-()\s\.)
  - check if the string matches /^\d{10}$/: if yes, return
  - check if the string matches /^\d{11}$/ and str[0] === '1'
    if yes, return str.slice(1)
  - return '0000000000'
*/

function phoneNumber(str) {
  var cleanStr = str.replace(/[-. ()]/g, '');
  if (/^\d{10}$/.test(cleanStr)) return cleanStr;
  if (/^\d{11}$/.test(cleanStr) && cleanStr[0] === '1') return cleanStr.slice(1);

  return '0000000000';
}


console.log(phoneNumber('1234567890')); // 1234567890
console.log(phoneNumber('(123)456-7890')); // 1234567890
console.log(phoneNumber('(123) 456 7890')); // 1234567890
console.log(phoneNumber('123.456.7890')); // 1234567890
console.log(phoneNumber('11234567890')); // 1234567890
console.log(phoneNumber('21234567890')); // 0000000000
console.log(phoneNumber('1234567890 hiii')); // 0000000000
console.log(phoneNumber('123_456_7890')); // 0000000000
console.log(phoneNumber('1-800-GET-RICH-NOW')); // 0000000000
