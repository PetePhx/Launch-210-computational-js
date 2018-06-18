// Array exercises
// https://launchschool.com/exercise_sets/75d23811

// 1. Array Copy Part 1

// Read through the code shown below. What does it log to the console at lines 5 and 8?

var myArray = [1, 2, 3, 4];
var myOtherArray = myArray;

myArray.pop();
console.log(myOtherArray); // [1, 2, 3]

// Since myArray and myOtherArray point to the same object, mutating myArray with pop() will change the value of myOtherArray as well

myArray = [1, 2];
console.log(myOtherArray); // [1, 2, 3]

// Reassigning myArray (i.e. pointing at a different object) does not have any effect on myOtherArray


// 2. Array Copy Part 2

// In the previous exercise, the value of the reference gets copied. For this exercise, only the values of the array should be copied, but not the reference. Implement two alternative ways of doing this.

// Here is the code from the previous exercise:

var myArray = [1, 2, 3, 4];
var myOtherArray = myArray;

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);

// Solution 1: using Array.from()

var myOtherArray = Array.from(myArray);

// Solution 2: using slice()

var myOtherArray = myArray.slice();


// 3. Array Concat Part 1

// In this exercise, you will learn more about Arrays by implementing your own version of the Array.prototype.concat method. Write a function that returns a new array composed of all values from the first array argument and the second array or value argument. Take note of the following specifications when writing your concat function.

  // The first argument will always be an array.
  // The second argument can be either an array or another value.
  // The function should return a new array.
  // The elements in the new array should be in the same order as they appear in the arguments.
  // The function should copy any object references from the arguments into the new array — i.e., if you make a change to a reference object from one of the arguments after calling concat, those changes should show up in the output array as well.
  // The function should copy the values of primitives (e.g., strings, numbers, and booleans).

function concat(arr, arg) {
  var result = arr.slice();

  if (Array.isArray(arg)) {
    for (var i = 0; i < arg.length; i++) { result.push(arg[i]); }
  } else {
    result.push(arg);
  }

  return result;
}

concat([1, 2, 3], [4, 5, 6]);          // [1, 2, 3, 4, 5, 6]
concat([1, 2], 3);                     // [1, 2, 3]
concat([2, 3], ['two', 'three']);      // [2, 3, "two", "three"]
concat([2, 3], 'four');                // [2, 3, "four"]


var obj = { a: 2, b: 3 };
var newArray = concat([2, 3], obj);
newArray;                              // [2, 3, { a: 2, b: 3 }]
obj.a = 'two';
newArray;                              // [2, 3, { a: "two", b: 3 }]

var arr1 = [1, 2, 3];
var arr2 = [4, 5, obj];
var arr3 = concat(arr1, arr2);
arr3;                                  // [1, 2, 3, 4, 5, { a: "two", b: 3 }]
obj.b = 'three';
arr3;                                  // [1, 2, 3, 4, 5, { a: "two", b: "three" }]

arr3[5].b = 3;                         // or, `arr3[5]['b'] = 3;`
obj;                                   // { a: "two", b: 3 }


// 3. Array Concat Part 2

// The concat function from the previous exercise could only concatenate a maximum of two arrays. For this exercise, you are going to extend that functionality. Refactor the concat function to allow for the concatenation of two or more arrays or values.

function concat2(arr) {
  var result = arr.slice();

  for (i = 1; i < arguments.length; i++) {
    if (Array.isArray(arguments[i])) {
      for (j = 0; j < arguments[i].length; j++) { result.push(arguments[i][j]); }
    } else {
      result.push(arguments[i]);
    }
  }

  return result;
}


concat2([1, 2, 3], [4, 5, 6], [7, 8, 9]);    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
concat2([1, 2], 'a', ['one', 'two']);        // [1, 2, "a", "one", "two"]
concat2([1, 2], ['three'], 4);               // [1, 2, "three", 4]
