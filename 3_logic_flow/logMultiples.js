/*
Print Multiples

Write a function logMultiples that takes one argument number. It should log all multiples of the argument between 0 and 100 (inclusive) that are also odd numbers. Log the values in descending order.

You may assume that number is an integer between 0 and 100.
Example

logMultiples(17);
// output (5x, 3x and 1x)
85
51
17

logMultiples(21);
// output (3x and 1x)
63
21

*/

/*
Input: Integer (num)
Output: log the odd multiples of num between 0-100 in descending order.
Algo:
  * loop i through 100 down to 0 in descending order
  * check if the number is odd and divisible by num
    if so, log i
  * ... Profit!
*/

function logMultiples(num) {
  for (var i = 100; i >= 0; i--) {
    if (i % 2 === 1 && i % num === 0) {
      console.log(i);
    }
  }
}

logMultiples(17);
logMultiples(21);


/* Further Expo

This solution must step through every number between 100 and 0. Alternatively, you can determine the number's largest multiple that is less than 100, then start the loop with that multiple. With each iteration of the loop, you can decrement the number by the argument; when the result is negative, you can quit.

As above, we must check each multiple to determine whether it is odd. If it is odd, we log it.

Math.floor(100 / number) * number returns the largest multiple of number that is between 0 and 100. If you're not familiar with the floor method, see the documentation.

*/

function logMultiplesFurtherExpo(num) {
  var i = Math.floor(100 / num) * num;
  for (; i >= num ; i -= num) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
}

logMultiplesFurtherExpo(17);
