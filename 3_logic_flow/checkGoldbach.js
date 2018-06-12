/*

Goldbach Numbers

Write a function named checkGoldbach() that uses Goldbach's Conjecture to log every pair of primes that sum to the number supplied as an argument. The conjecture states that "you can express every even integer greater than 2 as the sum of two primes". The function takes as its only parameter, an integer n, and logs all combinations of two prime numbers whose sum is n. Log the prime pairs with the smaller number first. If n is odd or less than 4, your function should log null.

Your checkGoldbach() function may call the isPrime() function you wrote for a previous practice problem.
Example

checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53
*/

/*
Input: positive integer
Output: list pairs of primes p1, p2 where p1 + p2 === num

Algorithm:
  Check if the number is even, otherwose return null
  If number is 4, output (2, 2)
  loop through odd numbers i from 3 to num/2
    check if i and (num - i) are both prime
      if so, log (i, num - i)

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

function checkGoldbach(num) {
  if (num % 2 === 1 || num < 4) {
    console.log('null');
    return;
  } else if (num === 4) {
    console.log(2, 2);
  }

  for (var i = 3; i <= num / 2; i += 2) {
    if (isPrime(i) && isPrime(num - i)) console.log(i, num - i);
  }
}

checkGoldbach(2);

checkGoldbach(3);

checkGoldbach(4);

checkGoldbach(12);

checkGoldbach(100);
