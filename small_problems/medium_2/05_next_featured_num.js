/*

Next Featured Number Higher than a Given Value

A 'featured number' (something unique to this exercise) is an odd number that is a multiple of 7, with all of its digits occuring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument, and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.

*/

/*
input: integer
output: next larger integer that is `featured`

rules: featured numbers are (a) with unique digits (b) odd (c) divisible by 7

algorithm:
  - for a given input number, find the next multiple of 7
    - find num % 7. add (7 - num % 7) to num
  - if it is even, add 7
  - while it is less than 9876543210,
    - check whether unique digits
    - if yes, return it
    - else increment by 14
  - return an error message
*/

function featured(num) {
  var next = num + (7 - num % 7);
  if (next % 2 === 0) next += 7;

  while (next < 9876543210) {
    if (uniqueDigits(next)) return next;
    next += 7;
  }

  return 'ERROR! No Larger Featured Number Found.'
}

function uniqueDigits(num) {
  return String(num).split('').every((dig, idx, arr) => arr.indexOf(dig) === idx);
}

console.log(uniqueDigits('1234')); // true
console.log(uniqueDigits('100'));  // flase

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9087654321));    // 9102346785
console.log(featured(9876543201));    // ERROR! No Larger Featured Number Found.
