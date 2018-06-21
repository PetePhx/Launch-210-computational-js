// 1. Logical Operation

// What will each line of the following code return? Don't run the code until after you have tried to answer.

(false && undefined); // false
(false || undefined); // undefined
((false && undefined) || (false || undefined)); // undefined
((false || undefined) || (false && undefined)); // false
((false && undefined) && (false || undefined)); // false
((false || undefined) && (false && undefined)); // undefined
('a' || (false && undefined) || ''); // 'a'
((false && undefined) || 'a' || ''); // 'a'
('a' && (false || undefined) && ''); // undefined
((false || undefined) && 'a' && ''); // undefined

// all due to the short-circuit behavior of && and ||, flasiness of undefined, and trthiness of strings except ''.


// 2. Conditional Loop

// The following program is expected to log each number between 0 and 9 (inclusive) that is a multiple of 3. Read through the code shown below. Will it produce the expected result? Why or why not?

var i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  } else {
    i += 1;
  }
}

// Since i is only incremented if the number os not a multiple of three, the loop will get stuck in the first value of i (0).


// 3. Multiplication Table

// The following program is expected to log a multiplication table for the numbers from 1 to 10 to the console. Read through the code shown below. Will it produce the expected result? Why or why not?

var row;
var i;
var j;

function padLeft(number) {
  var stringNumber = String(number);
  return stringNumber.length <= 1 ? ' ' + stringNumber : stringNumber;
}

for (i = 1; i < 10; i += 1) {
  row = '';
  for (j = 1; j <= 10; j += 1) {
    row += padLeft(i * j) + ' ';
  }

  console.log(row + '\n');
}

// The loop declaration in line 48 iterates i up to 9, not 10.


// 4. Selected Columns

// The getSelectedColumns function selects and extracts specific columns to a new array. Currently, the function is not producing the expected result. Go over the function and the sample runs shown below. What do you think the problem is?

function getSelectedColumns(numbers, cols) {
  var result = [];

  for (var i = 0, length = numbers.length; i < length; i += 1) {
    for (var j = 0, length = cols.length; j < length; j += 1) {
      if (!result[j]) {
        result[j] = [];
      }

      result[j][i] = numbers[i][cols[j]];
    }
  }

  return result;
}

// given the following arrays of number arrays
var array1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
var array2 = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];

// `array1` in row/column format
// [[1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]]

getSelectedColumns(array1, [0]);     // [[1]];            expected: [[1, 4, 7]]
getSelectedColumns(array1, [0, 2]);  // [[1, 4], [3, 6]]; expected: [[1, 4, 7], [3, 6, 9]]
getSelectedColumns(array2, [1, 2]);  // [[2, 2], [3, 4]]; expected: [[2, 2, 2], [3, 3, 3]]

// the length variable in the inner loop overwrites the length variable used in the outer loop. To fix this, use separate vars:

for (var i = 0, numLength = numbers.length; i < numLength; i += 1) {
  for (var j = 0, colLength = cols.length; j < colLength; j += 1) {
    // ...
  }
}


// 5. Counter

// What will the following code snippets log?
// Code Snippet 1

var counter = 5;
var rate = 3;
console.log('The total value is ' + String(counter * rate));

// 'The total value is 15'
// since counter is a variable

function counter(count) {
  // ...
}

// Code Snippet 2

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

// 'The total value is NaN'
// due to variable declaration hoisting (but not the assignments)


var counter = 5;
var rate = 3;

// Code Snippet 3

var counter = 5;
var rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

// 'The total value is NaN'
// counter is accessed as a variable


// 6. Logger

// Read through the following code. Why will it log 'debugging'?

function debugIt() {
  var status = 'debugging';
  function logger() {
    console.log(status);
  }

  logger();
}

debugIt();

// Due to JavaScript Lexical scoping the inner function scope for logger() can access the variable status in the outer scope within debugIt() and log it.


// 7. Invoice

// The invoiceTotal function in the code below computes the total amount for an invoice containing four "line items". How can you refactor the function so that it will work with invoices containing any number of line items?

function invoiceTotal(amount1, amount2, amount3, amount4) {
  return amount1 + amount2 + amount3 + amount4;
}

invoiceTotal(20, 30, 40, 50);          // works as expected
invoiceTotal(20, 30, 40, 50, 40, 40);  // does not work; how can you make it work?

// using the arguments object:

function invoiceTotal() {
  // var args = Array.prototype.slice(arguments);
  var result = 0;
  for (var i = 0; i < arguments.length; i++) { result += arguments[i]; }
  return result;
}

invoiceTotal(20, 30, 40, 50, 40, 40);  // 220


// 8. Product of Sums

// The productOfSums function shown below is expected to return the product of the sums of two arrays of numbers. Read through the following code. Will it produce the expected result? Why or why not?

function productOfSums(array1, array2) {
  var result;
  result = total(array1) * total(array2);
  return result;
}

function total(numbers) {
  var sum;
  var i;

  for (i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }

  sum;
}

// The variable sum is by default initialized to `undefined` in line 22, and subsequent arithmetic operations will result in NaN, that will propagate all the way to the productOfSums() return value
