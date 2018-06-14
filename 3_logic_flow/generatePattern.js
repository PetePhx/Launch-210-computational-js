/*
Pattern Generation

Write a function that takes a number of rows as the argument n and logs a square of numbers and asterisks. For example, if n is 7, log the following pattern:

generatePattern(7);

// console output
1******
12*****
123****
1234***
12345**
123456*
1234567

You may assume that n is greater than 1 and less than 10.
*/

/*
Input: integer between 1 and 10 exclusive
OUtput: pattern of 12..n*...*

Algorithm:
  * start from the numString '123456789'
  * run a loop for num cycles
    * in each cycle, log a string made of:
      * first i letters of the numString...
      * concatanated by '*...*' of (num - i) length
*/

function generatePattern(num) {
  if (num >= 10 || num <= 1) return null;
  var numString = '123456789';
  var starString = '*********'
  for (var i = 1; i <= num; i++) {
    console.log(numString.slice(0, i) + starString.slice(i, num));
  }
}

generatePattern(9);

/*
Further Exploration

Have you tried supplying generatePattern() with a number greater than 9? What did you observe? Can you fix the current implementation so that it still renders as a rectangle?

generatePattern(20);

// console output
1******************************
12*****************************
123****************************
1234***************************
12345**************************
123456*************************
1234567************************
12345678***********************
123456789**********************
12345678910********************
1234567891011******************
123456789101112****************
12345678910111213**************
1234567891011121314************
123456789101112131415**********
12345678910111213141516********
1234567891011121314151617******
123456789101112131415161718****
12345678910111213141516171819**
1234567891011121314151617181920

*/

function generatePatternFull(n) {
  if (n < 1) return null;
  var numString = '';
  var starString = '';
  for (var i = 1; i <= n; i++) {
    numString += (i).toString();
  }

  var len = numString.length;
  starString =numString.replace(/./g, '*');
  numString = '';
  for (var i = 1; i <= n; i++) {
    numString += (i).toString();
    console.log(numString + starString.slice(numString.length, len));
  }
}

generatePatternFull(20);
