/*
Fibonacci Numbers (Recursion)

Write a recursive method that computes the nth Fibonacci number, where nth is
an argument to the method.

The Fibonacci series is a sequence of numbers in which each number is the sum of the previous two numbers. The first two Fibonacci numbers are 1 and 1. The third number is 1 + 1 = 2, the fourth is 1 + 2 = 3, the fifth is 2 + 3 = 5, and so on. In mathematical terms, this can be represented as:

F(1) = 1
F(2) = 1
F(n) = F(n - 1) + F(n - 2) where n > 2

*/

/*
input: positive integer 1 or greater (n)
output: n'th fibonacci

rules: use a recursive function

algorithm:
  - validate input (num > 0)
  - if num is 1 or two, return 1
  - else, return fibonacci(num - 1) + fibonacci(num - 2)
*/

function fibonacci(num) {
  if (isNaN(num) || num < 1) return null;
  if (num === 1 || num === 2) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci('hi')); // == null,
console.log(fibonacci(-5)); // == null,
console.log(fibonacci(1)); // == 1,
console.log(fibonacci(2)); // == 1,
console.log(fibonacci(3)); // == 2,
console.log(fibonacci(4)); // == 3,
console.log(fibonacci(5)); // == 5,
console.log(fibonacci(12)); // == 144,
console.log(fibonacci(20)); // == 6765
