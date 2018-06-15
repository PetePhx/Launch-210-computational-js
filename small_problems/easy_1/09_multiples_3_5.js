/*
Multiples of 3 and 5

Write a function that computes the sum of all numbers between 1 and some other number, inclusive, that are multiples of 3 or 5. For instance, if the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

You may assume that the number passed in is an integer greater than 1.

Examples:

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168

*/

/*
input: positive integer num > 1
output: sum of integers between 1 and num divisible by 3 or 5

algo:
  * initialize var sum to 0
  * loop i from 1 through num
    * check whether i % 5 === 0 or i % 3 === 0
      * if true, add to sum
  * return sum
*/

function multisum(num) {
  var sum = 0;
  for (var i = 0; i <= num; i++) {
    if (i % 3 === 0 || i % 5 === 0) sum += i;
  }

  return sum;
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168


// using the sum formula for sequences:

function multisum2(num) {
  return 3 * Math.floor(num / 3) * (Math.floor(num / 3) + 1) / 2 +
         5 * Math.floor(num / 5) * (Math.floor(num / 5) + 1) / 2 -
         15 * Math.floor(num / 15) * (Math.floor(num / 15) + 1) / 2;
}

console.log(multisum2(3));       // 3
console.log(multisum2(5));       // 8
console.log(multisum2(10));      // 33
console.log(multisum2(1000));    // 234168
