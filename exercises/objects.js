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
