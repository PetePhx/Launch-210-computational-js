/*
Grade Book

Write a function that determines the mean (average) of the three scores passed to it, and returns the letter associated with that grade.

Numerical score letter grade list:

    90 <= score <= 100: 'A'
    80 <= score < 90: 'B'
    70 <= score < 80: 'C'
    60 <= score < 70: 'D'
    0 <= score < 60: 'F'

Tested values are all between 0 and 100. There is no need to check for negative values or values greater than 100.

Examples:

getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"

*/

function getGrade(num1, num2, num3) {
  var avg = (num1 + num2 + num3) / 3;

  if (avg < 60) {
    return 'F';
  } else if (avg < 70) {
    return 'D';
  } else if (avg < 80) {
    return 'C';
  } else if (avg < 90) {
    return 'B';
  } else if (avg <= 100) {
    return 'A';
  } else {
    return null;
  }
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"
