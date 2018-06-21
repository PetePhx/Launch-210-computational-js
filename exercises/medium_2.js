// 1. Defaults

// The processOrder function shown below accepts the following arguments: price, quantity, discount, serviceCharge and tax. Any arguments other than price may be omitted when calling the function, in which case, default values will be assigned.

function processOrder(price, quantity, discount, serviceCharge, tax) {
  if (!quantity) {
    quantity = 1;
  }

  if (!discount) {
    discount = 0;
  }

  if (!serviceCharge) {
    serviceCharge = 0.1;
  }

  if (!tax) {
    tax = 0.15;
  }

  return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
}

processOrder(100);      // 126.5

// This function uses conditional statements to test whether arguments have been omitted. When an argument is omitted, JavaScript automatically initializes it to a value of undefined. The function takes advantage of this behavior by setting undefined arguments to a default value.

// The following variation of the processOrder function has the same behavior as the first:

function processOrder(price, quantity, discount, serviceCharge, tax) {
  quantity = quantity || 1;
  discount = discount || 0;
  serviceCharge = serviceCharge || 0.1;
  tax = tax || 0.15;

  return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
}

// However, both of these solutions have a limitation that can lead to an incorrect result for certain inputs. What is this limitation and how does it affect the result?

// for input values of 0 for the optional arguments, the function will assign the default value since 0 evaluates to false (falsy value). better to explicitly check for `undefined` values.


// 2. Equal

// Read through the following code. Currently, it does not log the expected result. Explain why this happens, then refactor the code so that it works as expected.

var person = { name: 'Victor' };
var otherPerson = { name: 'Victor' };

console.log(person === otherPerson);    // false -- expected: true

// person and otherPerson are distinct objects, hence the strict inequality. To resolve, we can specifically compare names:

console.log(person.name === otherPerson.name); // true


// 3. Amount Payable

// What does the following code log? Why is this so?

var startingBalance = 1;
var chicken = 5;
var chickenQuantity = 7;

var totalPayable = function (item, quantity) {
  return startingBalance + (item * quantity);
};

startingBalance = 5;
console.log(totalPayable(chicken, chickenQuantity));
// 40

startingBalance = 10;
console.log(totalPayable(chicken, chickenQuantity));
// 45

// the function expression is not hoisted, creates a closure that retains access to the outer scope. At execution time it can access the var startingBalance in the outer scope.


// 4. Caller

// The doubler function in the code below takes two arguments: a number to double and return, and a string containing the name of the function's caller.

function doubler(number, caller) {
  console.log('This function was called by ' + caller + '.');
  return number + number;
}

doubler(5, 'Vikhtor');                   // returns 10
// logs:
// This function was called by Vikhtor.

// Write a makeDoubler function that takes a caller name as an argument, and returns a function that has the same behavior as doubler, but with a preset caller.

// the makeDoubler function returns another function with closure properties

function makeDoubler(name) {
  var out = function(number) {
    console.log('This function was called by ' + name + '.');
    return number + number;
  }
  return out;
}

var doubler = makeDoubler('Vikhtor');
doubler(5);                             // returns 10
// logs:
// This function was called by Vikhtor.


// 5. What's My Value?

// What will the following program log to the console? Can you explain why?

var array = ['Apples', 'Peaches', 'Grapes'];

array[3.4] = 'Oranges';
console.log(array.length); // 3
console.log(Object.keys(array).length); // 4

array[-2] = 'Watermelon';
console.log(array.length); // 3
console.log(Object.keys(array).length); // 5

// since array elements have to have non-negative integer indices, and assignning value to any other index is not considered an array element, hence not changing the array length. Arrays are objects, hence the length of the keys returned array increases after such assignments.


// 6. Length

// Read through the code below. What values will be logged to the console? Can you explain these results?

var languages = ['JavaScript', 'Ruby', 'Python'];

console.log(languages); // ['JavaScript', 'Ruby', 'Python']
console.log(languages.length);  // 3

languages.length = 4;
console.log(languages); // ['JavaScript', 'Ruby', 'Python', empty]
console.log(languages.length); // 4

languages.length = 1;
console.log(languages); // ['JavaScript']
console.log(languages.length); // 1

languages.length = 3;
console.log(languages); // ['JavaScript', empty, empty]
console.log(languages.length); // 3

languages.length = 1;
languages[2] = 'Python';
console.log(languages); // ['JavaScript', empty, 'Python']
console.log(languages[1]); // undefined
console.log(languages.length); // 3

// changing the length of an array will result in truncating of the array, or creating extra values with default value of undefined (shown as empty in log). Similarly, assigning values to indices larger than the array length creates extra undefined values for the in-between indices.


// 7. The Red Pill

// Read through the code below and determine what will be logged. You may refer to the ASCII Table to look up character code values.

function one() {
  function log(result) {
    console.log(result);
  }

  function anotherOne() {
    var result = '';
    var i;
    for (i = 0; i < arguments.length; i += 1) {
      result += String.fromCharCode(arguments[i]);
    }

    log(result);
  }

  function anotherAnotherOne() {
    console.log(String.fromCharCode(87, 101, 108, 99, 111, 109, 101));
    anotherOne(116, 111);
  }

  anotherAnotherOne();
  anotherOne(116, 104, 101);
  return anotherOne;
}

one()(77, 97, 116, 114, 105, 120, 33);

// Welcome                                line 180
// to                                     line 181
// the                                    line 185
// Matrix!                                line 189
