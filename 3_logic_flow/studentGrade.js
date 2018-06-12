/*
Student Grade

Write a program to determine a student’s grade based on the average of three scores you get from the user. Use these rules to compute the grade:

    If the average score is greater than or equal to 90 then the grade is 'A'
    If the average score is greater than or equal to 70 and less than 90 then the grade is 'B'
    If the average score is greater than or equal to 50 and less than 70 then the grade is 'C'
    If the average score is less than 50 then the grade is 'F'

You may assume that all input values are valid positive integers.
Example

// prompts to get the 3 scores
Enter score 1: 90
Enter score 2: 50
Enter score 3: 78

// log to the console
Based on the average of your 3 scores your letter grade is "B".
*/

/*
Input: prompt user for three grades
Output: log the letter grade based on avg

Algorithm:
  * Three times prompt the used for a grade
    * in each step convert input to number
    * add to the sum
  * calculate the average: sum / 3
  * based on average value, log the letter grade.
*/

function studentGrade() {
  var sum = 0;
  var avegare;
  var score;

  for (var i = 1; i <= 3; i++) {
    while (true) {
      score = prompt('Enter Score ' + i + ':');
      if (Number(score).toString() === score) {
        sum += Number(score);
        break;
      } else {
        alert('Please Enter Only a Number!');
      }
    }
  }

  average = sum / 3;
  if (average >= 90) {
    console.log('Based on the average of your 3 scores your letter grade is "A".');
  } else if (average >= 70) {
    console.log('Based on the average of your 3 scores your letter grade is "B".');
  } else if (average >= 50) {
    console.log('Based on the average of your 3 scores your letter grade is "C".');
  } else {
    console.log('Based on the average of your 3 scores your letter grade is "F".');
  }
}

/*
Further Exploration

Our solution limits us to exactly three input scores. Modify it to accept any number of scores.
*/

function studentGrade(n) {
  var sum = 0;
  var avegare;
  var score;

  for (var i = 1; i <= n; i++) {
    while (true) {
      score = prompt('Enter Score ' + i + ':');
      if (Number(score).toString() === score) {
        sum += Number(score);
        break;
      } else {
        alert('Please Enter Only a Number!');
      }
    }
  }

  average = sum / n;
  if (average >= 90) {
    console.log('Based on the average of your 3 scores your letter grade is "A".');
  } else if (average >= 70) {
    console.log('Based on the average of your 3 scores your letter grade is "B".');
  } else if (average >= 50) {
    console.log('Based on the average of your 3 scores your letter grade is "C".');
  } else {
    console.log('Based on the average of your 3 scores your letter grade is "F".');
  }
}
