/*
Double Doubles

A double number is an even-length number whose left-side digits are exactly the same as its right-side digits. For example, 44, 3333, 103103, and 7676 are all double numbers, whereas 444, 334433, and 107 are not.

Write a function that returns the number provided as an argument multiplied by two, unless the argument is a double number; return double numbers as-is.

Examples:

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676
*/

/*
input: integer (num)
output: num * 2 if not a double number, num if double

Algo:
  * convert num to str
  * split string to to halvs, compare
    * if equal, return num, else return num * 2
*/

function twice(num) {
  var str = num.toString();
  var len = str.length;
  return (str.slice(0, len / 2) === str.slice(len / 2, len) ? num : num * 2);
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676
