
// 1. Local vs Global Part 1
//
// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
}

someFunction();
console.log(myVar);

// 'This is global'
// Due to Lexical Scoping of JavaScript. Since the local variable `myVar` is declared within the function, it won't overwrite the global `myVar`


// 2. Local vs Global Part 2
//
// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
  console.log(myVar);
}

someFunction();

// 'This is local'
// Since the local variable `myVar` shodows the global variable with the same name within the function scope.


// 3. Local vs Global Part 3

// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

var myVar = 'This is global';

function someFunction() {
  myVar = 'This is local';
}

someFunction();
console.log(myVar);

// 'This is local'
// The inner scope of the function accesses the global scope and reassigning the `myVar` variable after function execution.


// 4. Variable Lookup

// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

var myVar = 'This is global';

function someFunction() {
  console.log(myVar);
}

someFunction();

// 'This is global'
// The local scope of the function can access the global scope and log the string.


// 5. Variable Scope

// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

function someFunction() {
  myVar = 'This is global';
}

someFunction();
console.log(myVar);

// 'This is global'
// The function executiong will initialize and assign a global variable `myVar`


// 6. Arguments Part 1

// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

var a = 7;

function myValue(b) {
  b += 10;
}

myValue(a);
console.log(a);

// 7
// even though a is passed in as an argument, the reassignment of the argument within the function scope will not affect the gloabl scope variable.


// 7. Arguments Part 2

// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

var a = 7;

function myValue(a) {
  a += 10;
}

myValue(a);
console.log(a);

// 7
// the notation used in the function definition for parameters does not have any effect on the global variables. also the reassignment of argument passed in to the function does not affect the global scope.


// 8. Arguments Part 3

// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

var a = [1, 2, 3];

function myValue(b) {
  b[2] += 7;
}

myValue(a);
console.log(a);

// [1, 2, 10]
// arrays are passed by reference (the value is the reference), hence the function execution causes the change in the third element of the array (index 2)  to become 10.


// 9. Variable Declarations

// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

console.log(a);

var a = 1;

// 'undefined'
// Since the variable declaration (but not the assignment) is hoisted to the top of the scope.


// 10. Function Declarations

// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

logValue();

function logValue() {
  console.log('Hello, world!');
}

// 'Hello, world!'
// Since the function definition is hoisted to the top of the program.

// Further Exploration
//
// Let's refactor the code a bit. What does it log now? What is the hoisted equivalent of this code?

var logValue = 'foo';

function logValue() {
  console.log('Hello, world!');
}

console.log(typeof logValue);

// 'string'
// This is the hoisted version of the program:

function logValue() {             // function declarations are hoisted firs
  console.log('Hello, world!');
}

var logValue

logValue = 'foo';       // assignments are not hoisted. `logValue` is assigned a string
console.log(typeof logValue); // string
