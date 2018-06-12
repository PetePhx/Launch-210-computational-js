/*
Prime Check

Write a function that takes a number argument, and returns true if the number is prime, or false if it is not.

You may assume that the input is always a non-negative integer.
Example

isPrime(1);   // false
isPrime(2);   // true
isPrime(3);   // true
isPrime(43);  // true
isPrime(55);  // false
isPrime(0);   // false

*/

/*
Inpute: Positive Integer (num)
Output: Boolean: whether or not num is prime

Algorithm:

  * calculate the ceiling of Math.sqrt(num) (root)
  * loop i from 2 to root
    * if num % i === 0 : return false
  * return true

*/

function isPrime(num) {
  if (num < 2 || (num > 2 && num % 2 === 0)) return false;
  if (num === 2) return true;

  sqroot = Math.sqrt(num);
  for (var i = 3; i <= sqroot; i += 2) {
    if (num % i === 0) return false;
  }

  return true;
}

for (var i = 0; i < 100; i++) {
  if (isPrime(i)) console.log(i);
}
