/*

Write a formulat that calculates the Luhn sum of a number, and returns wther is it valid

Start from right most digit.
  double the value of every other digit (second, fourth, sixth,...)
    if it is larger than 9, subtract 9 from it
  sum all these values

  if the sum is divisible by 10, it is valid, else, not valid
ignore all non-numeric chars
*/

function validLuhn(str) {
  var cleanStr = str.replace(/\D/g, '');
  var digits = cleanStr.split('').map(Number).reverse(); // right-to-left digits array
  var sum = digits.map(function (num, idx) {
    if (idx % 2 === 0) {
      return num;
    } else {
      var twice = num * 2;
      if (twice > 9) twice -= 9;
      return twice;
    }
  }).reduce((acc, num) => acc + num, 0);

  return sum % 10 === 0;
}

console.log(validLuhn('2323 2005 7766 3554')); // true
console.log(validLuhn('2323 2005 HELLO 7766 3554')); // true
console.log(validLuhn('1111')); // false
