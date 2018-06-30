/*

Sum of Digits

Write a function that takes one argument, a positive integer, and returns the sum of its digits. Do this using list processing techniques.

*/

function sum(num) {
  return String(num).split('').map(Number).reduce((acc, elm) => acc + elm, 0);
}

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45
