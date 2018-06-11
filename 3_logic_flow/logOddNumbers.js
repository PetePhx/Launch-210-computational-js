// Odd Numbers

// Write a function that takes a positive integer as an argument, and logs all the odd numbers from 1 to the passed in number (inclusive). All numbers should be logged on separate lines.
//
// e.g.
//
// logOddNumbers(19);
//
// // output on console
// 1
// 3
// ...
// 17
// 19

/*
Input: number (n, integer)
Output log: list of odd integers from 1 to the numebr (inclusive)
Algorithm:
  initialize the loop variable i to 1
  in each iteration check whether i <= n
    if yes, log i. otherwise end the loop
*/

function logOddNumbers(num) {
  for (var i = 1; i <= num; i += 2) {
    console.log(i);
  }
}

logOddNumbers(19);

// Further Exploration
//
// Instead of a conditional that checks for odd numbers, you can write a conditional that checks for even numbers, but skips them with the continue statement. How would you write your code?

function logOddNumbers(num) {
  for (var i = 1; i <= num; i++) {
    if (i % 2 === 0) continue;
    console.log(i);
  }
}

logOddNumbers(10);
