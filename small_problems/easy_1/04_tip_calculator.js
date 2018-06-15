/*

Tip Calculator

Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. The program must compute the tip, and then log both the tip and the total amount of the bill to the console. You can ignore input validation and assume that the user will put in numbers.

Example:

What is the bill? 200
What is the tip percentage? 15

The tip is $30.00
The total is $230.00

*/

function tipCalculator() {
  var amount = parseInt(prompt('What is the bill? '), 10);
  var tipPercent = parseInt(prompt('What is the tip percentage? '), 10);
  var tip;
  var total;

  tip = amount * tipPercent / 100;
  total = amount + tip;

  console.log('The tip is $' + tip.toFixed(2));
  console.log('The total is $' + total.toFixed(2));
}

tipCalculator();
