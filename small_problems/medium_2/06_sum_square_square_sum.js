/*

Sum Square - Square Sum

Write a function that computes the difference between the square of the sum of the first n positive integers and the sum of the squares of the first n positive integers.

*/

function sumSquareDifference(n) {
  var sum = n * (n + 1) / 2; // linear series
  var sumOfSq = Array(n).fill()
                          .map((_, idx) => idx + 1)
                          .map(elm => elm * elm)
                          .reduce((acc, elm) => acc + elm, 0);

  return sum * sum - sumOfSq;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150
