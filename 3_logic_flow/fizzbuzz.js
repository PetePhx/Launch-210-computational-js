/*
FizzBuzz

Write a function that iterates over the integers from 1 to 100, inclusive. For multiples of three, log "Fizz" to the console. For multiples of five, log "Buzz". For numbers which are multiples of both three and five, log "FizzBuzz". For all other numbers, log the number.

Your output should look like this:

fizzbuzz();

// console output
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz

*/

/*
Input: nothing
Output: log:
        multiples of
            15: FizzBuzz
            3: Fizz
            5: Buzz
            else: the numebr itself

Algorithm:
  * loop i though 1 to 100
    * check if i % 15 === 0
      if yes, FizzBuzz
    * else, check if i % 3 ===0
      if yes Fizz
    * else , check i % 5 === 0
      if yes, Buzz
    * else, log i
*/

function fizzbuzz() {
  for(var i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

fizzbuzz();
