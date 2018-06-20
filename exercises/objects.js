// JavaScript Language Fundamentals: Objects

// 1. Literal

// Identify the bug in the following code. Don't run the code until after you've tried to answer.

var myObject = {
  a: 'name',
  'b': 'test',
  123: 'c',
  1: 'd',
};

myObject[1];
myObject[a];
myObject.a;

// when using the bracket notation to access object properties, we have to provide string literals, otherwise JS interpreter would try to compute the expression value, resulting in REferenceError. line 15 needs to change to:

myObject['a']; // 'name'


// 2. Literal Method

// In the following code, a user creates a person object literal and defines two methods for returning the person's first and last names. What is the result when the user tries out the code on the last line?

var person = {
  firstName: function () {
    return 'Victor';
  },
  lastName: function () {
    return 'Reyes';
  },
};

console.log(person.firstName + ' ' + person.lastName);

// Instead of executing functions, we are coercing them to strings, concatanating and looging the result:

// function () {
//     return 'Victor';
//   } function () {
//     return 'Reyes';
//   }


// 3. Mutation

// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

var array1 = ['Moe', 'Larry', 'Curly', 'Chemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
var array2 = [];
var i;

for (i = 0; i < array1.length; i += 1) {
  array2.push(array1[i]);
}

for (i = 0; i < array1.length; i += 1) {
  if (array1[i].startsWith('C')) {
    array1[i] = array1[i].toUpperCase();
  }
}

console.log(array2);

// In the first loop the array1 elements are pushed into array2 one by one.
// In the second part some of the array1 elements are replaced with the uppercase versions (string are primitives/immutable, so the strings themselves aren't changed)
// Reassigning in array2 does not have any effect in array1, since they are separate objects

// ['Moe', 'Larry', 'Curly', 'Chemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo']


// Further Exploration

// What would happen if an object literal was part of the array1 elements pushed to array2? Would changes made to the object literal in array1 be reflected in array2?

  // yes, since objects are mutable.

// How would you change the code so that any changes made to array1 in the second for loop get reflected to array2?

  // make array1 and array2 to point to the same object: array2 = array1


// 4. Dynamic

// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

var myObject = {
  prop1: '123',
  prop2: '234',
  'prop 3': '345',
};

var prop2 = '456';
myObject['prop2'] = '456';
myObject[prop2] = '678';

console.log(myObject[prop2]); // '678'
console.log(myObject.prop2);  // '456'

// In line 99 `prop2` is treated as an expression that evaluates to '456'
// In line 100 prop2 is treated as a string literal.

// Further Exploration

// Here is another example. What do you think will be logged to the console this time, and why?

var myObj = {};
myObj[myFunc()] = 'hello, ';

function myFunc() {
  return 'funcProp';
}

console.log(myObj); // { 'funcProp': 'hello, ' }
myObj[myFunc()] = 'world!';
console.log(myObj); // { 'funcProp': 'world!' }

// in line 110 and 117 myFunc() inside the brackets is executed, evaluating to 'funcProp' which subsequently becomes the key for rhe object `myObj`


// 5. Array Object Part 1

// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

var myArray = ['a', 'b', 'c'];

console.log(myArray[0]); // 'a'
console.log(myArray[-1]); // undefined

myArray[-1] = 'd';
myArray['e'] = 5;
myArray[3] = 'f';

console.log(myArray[-1]); // 'd'
console.log(myArray['e']); // 5
console.log(myArray);      // ['a', 'b', 'c', 'f', '-1': 'd', 'e': -5]

// line 132 assigns 'd' to the key '-1'. since a non-positive integer, it is not an element
// line 133 assigns vaue 5 to key 'e'. again not an element
// line 134 appends value 'f' to the end of array at index 3.


// 6. Array Object Part 2

// A user wrote a function that takes an array as an argument and returns its average. Given the code below, the user expects the average function to return 5. Is the user's expectation correct? Why or why not?

var myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;

function average(array) {
  var sum = 0;
  var i;

  for (i = -2; i < array.length; i += 1) {
    sum += array[i];
  }

  return sum / array.length;
}

average(myArray);

// this is incorrect, since the array length property only looks at the largest positive integer index. In this case, MyArray.length would return 2, not 4. The average calculation would return 10 instead of 5.

// Further Exploration

// Refactor the average function so that it returns the result that the user expected, 5.

//  In line 161 we need to return sum / 4.


// 7. What's my Bonus

// The calculateBonus function calculates the bonus for a given salary. It makes use of two arguments for determining the bonus: a salary amount and a boolean switch. If the boolean is true, the bonus should be half of the salary; otherwise the bonus should be 0. Fill in the blanks in the function so that it will work, then explain why it works.

// function calculateBonus() {
//   return _________[1] ? _________[0] / 2 : 0;
// }

function calculateBonus() {
  return arguments[1] ? arguments[0] / 2 : 0;
}

calculateBonus(2800, true);               // 1400
calculateBonus(1000, false);              // 0
calculateBonus(50000, true);              // 25000

// Here we use the `arguments` array-like object to access the first and second arguments wihtout naming them.


// 8. The End is Near But Not Here

// The penultimate function takes a string as an argument and returns the next-to-last word in the string. The function assumes that "words" are any sequence of non-whitespace characters. The function also assumes that the input string will always contain at least two words. The penultimate function in the example below does not return the expected result. Run the code below, check the current result, identify the problem, explain what the problem is, and provide a working solution.


function penultimate(string) {
  return string.split(' ')[-2];
}

penultimate('last word');                    // expected: "last", but return undefined
penultimate('Launch School is great!');      // expected: "is", but returns undefined

// negative indices cannot be used with the bracket notation. We can use slice() though

function ultimatePenultimate(string) {
  return string.split(' ').slice(-2, -1)[0];
}

ultimatePenultimate('last word');
ultimatePenultimate('Launch School is great! jajaja');


// 9. After Midnight Part 1

// We can use the number of minutes before or after midnight to represent the time of day. If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.

// The timeOfDay function below takes a time argument using this minute-based format, and returns the time of day in 24-hour format ("hh:mm"). Reimplement the function using JavaScript's Date object.

timeOfDay(0);          // "00:00"
timeOfDay(-3);         // "23:57"
timeOfDay(35);         // "00:35"
timeOfDay(-1437);      // "00:03"
timeOfDay(3000);       // "02:00"
timeOfDay(800);        // "13:20"
timeOfDay(-4231);      // "01:29"

// Note: Disregard Daylight Saving Time, Standard Time, and other complications.

var MINUTES_PER_HOUR = 60;
var HOURS_PER_DAY = 24;
var MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function timeOfDay(deltaMinutes) {
  var hours;
  var minutes;

  deltaMinutes = deltaMinutes % MINUTES_PER_DAY;
  if (deltaMinutes < 0) {
    deltaMinutes = MINUTES_PER_DAY + deltaMinutes;
  }

  hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
  minutes = deltaMinutes % MINUTES_PER_HOUR;

  return padWithZeroes(hours, 2) + ':' + padWithZeroes(minutes, 2);
}

function padWithZeroes(number, length) {
  var numberString = String(number);

  while (numberString.length < length) {
    numberString = '0' + numberString;
  }

  return numberString;
}

// re-implementing using Date:

function timeOfDay(deltaMinutes) {
  var date = new Date(2018, 0, 1, 0, deltaMinutes); // arbitrary date with minutes set to deltaMinutes
  var hours = date.getHours();
  var minutes = date.getMinutes();

  return padWithZeroes(hours, 2) + ':' + padWithZeroes(minutes, 2);
}


// 10. After Midnight Part 2

// As seen in the previous exercise, the time of day can be represented as the number of minutes before or after midnight. If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.

// The two functions below do the reverse of the previous exercise. They take a 24-hour time argument and return the number of minutes before or after midnight, respectively. Both functions should return a value between 0 and 1439 (inclusive). Refactor the functions using the Date object.

afterMidnight('00:00');       // 0
beforeMidnight('00:00');      // 0
afterMidnight('12:34');       // 754
beforeMidnight('12:34');      // 686

var MINUTES_PER_HOUR = 60;
var HOURS_PER_DAY = 24;
var MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function afterMidnight(timeStr) {
  var timeComponents = timeStr.split(':');
  var hours = parseInt(timeComponents[0], 10);
  var minutes = parseInt(timeComponents[1], 10);

  return hours * MINUTES_PER_HOUR + minutes;
}

function beforeMidnight(timeStr) {
  var deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
  if (deltaMinutes === MINUTES_PER_DAY) {
    deltaMinutes = 0;
  }

  return deltaMinutes;
}

// refactored solution:

function afterMidnight(timeStr) {
  var date = new Date('2018-01-01T' + timeStr);

  return MINUTES_PER_HOUR * date.getHours() + date.getMinutes();
}

function beforeMidnight(timeStr) {
  return (MINUTES_PER_DAY - afterMidnight(timeStr)) % MINUTES_PER_DAY;
}
