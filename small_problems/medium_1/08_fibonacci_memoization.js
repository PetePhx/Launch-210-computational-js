/*

Fibonacci Numbers (Memoization)

Our recursive fibonacci function from the previous exercise is not very efficient. It starts slowing down with an nth argument value as low as 35. One way to improve the performance of our recursive fibonacci function (and other recursive functions) is to use memoization.

Memoization is an approach that involves saving a computed answer for future reuse, instead of computing it from scratch every time it is needed. In the case of our recursive fibonacci function, using memoization saves calls to fibonacci(nth - 2) because the necessary values have already been computed by the recursive calls to fibonacci(nth - 1).

For this exercise, your objective is to refactor the recursive fibonacci function to use memoization.

*/

/*

algorithm:
  - validate input
  - initialize a variable (lastVal) outside the function to create a closure
  - return 1 for inputs 1 and 2, setting lastVal to 1
  - for general n, set last val to fibonacci(n - 1)

*/

// var memo = [0, 1, 1];
//
// function fibonacci(n) {
//   if (isNaN(n) || n < 1) return null;
//   if (!memo[n]) {
//     memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
//   }
//   return memo[n];
// }

/*
Further Exploration

The current solution defines the memo object in the global scope. Can you use an IIFE (Immediately-Invoked Function Expression) to make memo private instead? If the concept of an IIFE is new to you, you may want to wait until after it is covered in course 220 before doing this Further Exploration exercise.
*/


function fibonacci(n) {

}

console.log(fibonacci('hi')); // == null,
console.log(fibonacci(-5)); // == null,
console.log(fibonacci(1)); // == 1,
console.log(fibonacci(2)); // == 1,
console.log(fibonacci(3)); // == 2,
console.log(fibonacci(4)); // == 3,
console.log(fibonacci(5)); // == 5,
console.log(fibonacci(12)); // == 144,
console.log(fibonacci(35)); // == 6765
// console.log(fibonacci(50));       // 12586269025
// console.log(fibonacci(100));      // 354224848179262000000 (large integer representation)
