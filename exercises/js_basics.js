// 1. Building Strings

// The intention of the program below is to output a paragraph. Copy and paste the program into a JavaScript console (e.g., from the Chrome Developer Tools), then run it. Is the output what you expected? Are there any bugs/errors?

var paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed \
                ligula at risus vulputate faucibus. Aliquam venenatis nibh ut justo dignissim \
                dignissim. Proin dictum purus mollis diam auctor sollicitudin. Ut in bibendum \
                ligula. Suspendisse quam ante, dictum aliquam tristique id, porttitor pulvinar \
                diam. Maecenas blandit aliquet ipsum. Integer vitae sapien sed nulla rutrum \
                hendrerit ac a urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.';

console.log(paragraph);

// SyntaxError due to extra white spaces at the the end of line 9.

// /home/user/Launch/210_computational_js/exercises/js_basics.js:5
// var paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed \
//                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//
// SyntaxError: Invalid or unexpected token
//     at createScript (vm.js:80:10)
//     at Object.runInThisContext (vm.js:139:10)
//     at Module._compile (module.js:616:28)
//     at Object.Module._extensions..js (module.js:663:10)
//     at Module.load (module.js:565:32)
//     at tryModuleLoad (module.js:505:12)
//     at Function.Module._load (module.js:497:3)
//     at Function.Module.runMain (module.js:693:10)
//     at startup (bootstrap_node.js:191:16)
//     at bootstrap_node.js:612:3


// After removing the white space at the end of line 9, we still get the extra blank/white space in the middle os th estring due to extra blank spaces at the beginning of each line of text.


// 2. Conditionals Part 1

// Go over the following program. What does it log to the console at lines 7, 11, 15, and 19? Is it what you expected? Why or why not?

var myBoolean = true;
var myString = 'hello';
var myArray = [];
var myOtherString = '';

if (myBoolean) {
  console.log('Hello'); // expecting `Hello`
}

if (!myString) {
  console.log('World'); // Won't execute, as myString is truthy.
}

if (!!myArray) {
  console.log('World'); // expecting 'World', as myArray is truthy
}

if (myOtherString || myArray) {
  console.log('!'); // expecting '!', as myArray is truthy
}
// output:
// Hello
// World
// !


// 3. Conditionals Part 2

// One of the ways to manage the flow of a program is through the use of conditionals. Go over the code below and specify how many possible flows/paths there are.

// if (condition1) {
//   // ...
//   if (condition2) {
//     // ...
//   } else {
//     // ...
//   }
// } else {
//   // ...
//   if (condition4) {
//     // ...
//     if (condition5) {
//     // ...
//     }
//   }
// }

//                          /
//               condition_2
//             /            \
// condition_1                           /
//             \              condition_5
//              \           /            \
//               condition_4
//                          \
//
// The number of leaves on the graph is 5.


// 4. String Assignment

// Take a look at the following code:

var name = 'Bob';
var saveName = name;
name = 'Alice';
console.log(name, saveName);

// What does this code log to the console? Think about it for a moment before continuing.

// Alice Bob, since `name` is reassigned in line 105.

// Now let's look at something slightly different:

var name = 'Bob';
var saveName = name;
name.toUpperCase();
console.log(name, saveName);

// What does this code log? Can you explain these results?

// since the function toUpperCase() is non-destructive it returns 'BOB' but it doesn't change the value of the local variable `name` since strings, like other primitives are immutable. We expect it to log: Bob Bob

// Further Exploration

// If you take another look at the code, you'll notice that on line 3, the string referenced by the name variable calls the String.prototype.toUpperCase method. How is it possible that even though this string is a primitive, it's still able to call a method?

// Even though primitives are not objects per se, javascript interpreter creates object wrappers around primitives in order to access methods, execute them, returning the value and then destroy the wrapper object.


// 5. Arithmetic Integer

// In this program we're going to explore the basic arithmetic operations in JavaScript. The program below prompts the user for two positive integers, then logs the results of the following operations on those two numbers: addition, subtraction, product, quotient, remainder, and power. For this exercise, assume positive integers as inputs.

// Here are our expected results after running the program:

// Enter the first number: 23
// Enter the second number: 17
//
// 23 + 17 = 40
// 23 - 17 = 6
// 23 * 17 = 391
// 23 / 17 = 1
// 23 % 17 = 6
// 23 ** 17 = 1.4105003956066297e+23
//
// Here is the code for the program:

// var number1 = prompt('Enter the first number:');
// var number2 = prompt('Enter the second number:');
//
// console.log(number1 + ' + ' + number2 + ' = ' + (number1 + number2));
// console.log(number1 + ' - ' + number2 + ' = ' + (number1 - number2));
// console.log(number1 + ' * ' + number2 + ' = ' + (number1 * number2));
// console.log(number1 + ' / ' + number2 + ' = ' + Math.floor(number1 / number2));
// console.log(number1 + ' % ' + number2 + ' = ' + (number1 % number2));
// console.log(number1 + ' ** ' + number2 + ' = ' + Math.pow(number1, number2));

// Did the results of the program match what we expected? Why or why not? If not, can you fix it?


// In line 151 instead or integer addition, we got string concatanation as a result. This is because all the input entered by the use is originally of string type and need to be converted to Number before further arithmetic operations:

// var number1 = Number(prompt('Enter the first number:'));
// var number2 = Number(prompt('Enter the second number:'));

// Alternatively, we could use also `parseInt()`


// 6. Counting the Number of Characters

// In this exercise, you will write a program that asks the user for a phrase, then outputs the number of characters in that phrase. Go over the documentation for String to find an appropriate method to use.

// Examples:

// Please enter a phrase: walk
// // console output
// There are 4 characters in "walk".
//
// Please enter a phrase: walk, don't run
// // console output
// There are 15 characters in "walk, don't run".

var userStr = prompt('Please enter a phrase: ');
console.log('There are ' + userStr.length + ' characters in "' + userStr + '".');

// Further Exploration
//
// The solution counts all the characters in the phrase, including spaces. Refactor it so that it ignores spaces.

// Since the refactored program shouldn't count spaces, you can use the String.prototype.replace method to return a new string with all spaces removed from it. Go over the documentation to see how you can do this. The thing to note here is that the first argument passed to replace can be a regular expression pattern.

var userStr = prompt('Please enter a phrase: ');
console.log('There are ' + userStr.replace(/\s/g, '').length + ' non-space characters in "' + userStr + '".');

// There are 13 non-space characters in "walk, don't run".

// As an added challenge, further refactor the solution so that it only counts alphabetic characters.

var userStr = prompt('Please enter a phrase: ');
console.log('There are ' + userStr.replace(/[^a-z]/ig, '').length + ' alphabetic characters in "' + userStr + '".');

// There are 11 alphabetic characters in "Walk, don't run".
