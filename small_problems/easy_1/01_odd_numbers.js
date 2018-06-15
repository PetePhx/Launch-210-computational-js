/*
1. Odd Numbers

Log all odd numbers from 1 to 99, inclusive, to the console. Log all numbers on separate lines.
*/

for (var i = 1; i <= 99; i += 2) { console.log(i); }

/*
Further Exploration:

Repeat this exercise with a technique different from the one that you used, and different from the one provided. Also consider adding a way for the user to specify the limits of the odd numbers logged to the console.
*/

var i = 1;

while ( i <= 99 ) {
  console.log(i);
  i += 2;
}
