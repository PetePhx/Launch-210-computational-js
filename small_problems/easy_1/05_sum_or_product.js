/*

Sum or Product of Consecutive Integers

Write a program that asks the user to enter an integer greater than 0, then asks if the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

Examples:

Please enter an integer greater than 0: 5
Enter "s" to compute the sum, or "p" to compute the product. s

The sum of the integers between 1 and 5 is 15.

Please enter an integer greater than 0: 6
Enter "s" to compute the sum, or "p" to compute the product. p

The product of the integers between 1 and 6 is 720.

*/

function sumOrProduct() {
  var num;
  var sp;
  var result;

  do {
    num = parseInt(prompt('Please enter an integer greater than 0: '), 10);
  } while (isNaN(num) || num < 1);

  do {
    sp = prompt('Enter "s" to compute the sum, or "p" to compute the product. ');
  } while (sp !== 's' && sp !== 'p');

  switch (sp) {
    case 's':
      result = 0;
      for (var i = 1; i <= num; i++) { result += i };
      console.log('The sum of the integers between 1 and ' + num + ' is ' + result + '.');
      break;
    case 'p':
      result = 1;
      for (var i = 1; i <= num; i++) { result *= i };
      console.log('The product of the integers between 1 and ' + num + ' is ' + result + '.');
      break;
  }
}

sumOrProduct();
