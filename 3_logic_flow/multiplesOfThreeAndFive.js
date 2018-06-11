/*
Multiples of 3 and 5

Write a function that logs the integers from 1 to 100 (inclusive) that are multiples of either 3 or 5. If the number is divisible by both 3 and 5, append an "!" to the number.
Example

multiplesOfThreeAndFive();

// output on console
3
5
6
9
10
12
15!
// ... remainder of output omitted for brevity
*/

/*
input: none
output log: list of integers between 1 and 100 that are divisible by 3 or 5, with `!` appended at the end to those that are divisible by both.
algorithm:
  - loop through all the integers (num) between 1 to 100.
    - if num % 15 === 0, log num + '!'
    - else, if num % 3 === 0 or num % 5 === 0, log num,
*/

function multiplesOfThreeAndFive() {
  for(var i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      console.log(i.toString() + '!');
    } else if (i % 3 === 0 || i % 5 === 0) {
      console.log(i);
    }
  }
}

multiplesOfThreeAndFive();

// Further Explications

// For additional practice, how would you change your function so it takes, as arguments, the range of numbers it should check?

function multiplesOfThreeAndFiveFurtherExpo(num) {
  for (var i = 1; i <= num; i++) {
    switch (i % 15){
      case 0:
        console.log(i.toString() + '!');
        break;
      case 3:
      case 5:
      case 6:
      case 9:
      case 10:
      case 12:
        console.log(i.toString());
        break;
    }
  }
}

multiplesOfThreeAndFiveFurtherExpo(105);
