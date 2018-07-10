/*

Fibonacci Numbers (Procedural)

In the previous exercise, we developed a recursive solution for computing the nth Fibonacci number. In a language that is not optimized for recursion, some (but not all) recursive functions can be extremely slow and may require massive quantities of memory and/or stack space. If you tested for bigger nth numbers, you might have noticed that getting the 50th fibonacci number already takes a significant amount of time.

Fortunately, every recursive function can be rewritten as a non-recursive (or procedural) function.

Rewrite your recursive fibonacci function so that it computes its results without using recursion.

*/

/*
algorithm:
  - validate input (num)
  - return
  - initialize m and n to 1 and 1
  - loop i from 3 to num. in each iteration:
    - [m, n] ---> [n, m + n]
    - increment i
  - return n
*/

function fibonacci(num) {
  if (isNaN(num) || num < 1) return null;
  if (num === 1 || num === 2) return 1;
  var a = 1;
  var b = 1;

  for (let i = 3; i <= num; i += 1) {
    [a, b] = [b, a + b];
  }

  return b;
}

console.log(fibonacci(6));        // 8
console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(100));      // 354224848179262000000 (large integer representation)
