/*
Running Totals

Write a function that takes an array of numbers, and returns an array with the same number of elements, with each element's value being the running total from the original array.

Examples:

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []

*/

function runningTotal(arr) {
  var sumArr = [];
  var runningSum = 0;
  var i;

  for (i = 0; i < arr.length; i += 1) {
    runningSum += arr[i];
    sumArr.push(runningSum);
  }

  return sumArr;
}

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []


/*

Further Exploration

Can you rewrite the solution using the Array.prototype.map method? What types of problems do you think are well-suited for the Array.prototype.map method?

*/

function runningTotalMap(arr) {
  var runningSum = 0;

  return arr.map(function (x) {
    runningSum += x;
    return runningSum;
  });
}

runningTotalMap([2, 5, 13]);             // [2, 7, 20]
runningTotalMap([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotalMap([3]);                    // [3]
runningTotalMap([]);                     // []
