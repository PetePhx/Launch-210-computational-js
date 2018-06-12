/*
Greatest Common Divisor

Create a function that computes the Greatest Common Divisor of two positive integers.
Example

gcd(12, 4);   // 4
gcd(15, 10);  // 5
gcd(9, 2);    // 1
*/

/*
Input: two positive integers, m, n
Output: gcd(m, n)

Algorithm:
  * euclidean ladder
    * recursively, calculate m % n
      * if n === 0, return m
      * replace (m, n) with (n, m % n)

*/

function gcd(m, n) {
  if (n === 0) return m;
  return gcd(n, m % n);
}

console.log(gcd(6, 18));

/*
Further Exploration

Our solution works with only two numbers. Can you expand it to accept an array of two or more numbers instead? Hint: the GCD is associative.

*/

function gcdArr(arr) {
  var len = arr.length;
  if (len === 1) {
    return arr[0];
  } else if (len === 2) {
    return gcd(arr[0], arr[1]);
  }
  return gcdArr([gcd(arr[0], arr[1])].concat(arr.slice(2, len)));
}


console.log(gcdArr([15]));
console.log(gcdArr([15, 25]));
console.log(gcdArr([15, 25, 10, 105]));
