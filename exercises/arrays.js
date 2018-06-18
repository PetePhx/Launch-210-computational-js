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


// 4. Array Concat Part 2

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


// 5. Array Pop and Push

// In this exercise, you will implement your own version of two Array methods: Array.prototype.pop and Array.prototype.push. The pop method removes the last element from an array and returns that element. If pop is called on an empty array, it returns undefined. The push method, on the other hand, adds one or more elements to the end of an array and returns the new length of the array.

function pop(arr) {
  if (arr.length === 0) return undefined;
  var len = arr.length;
  var out = arr[len - 1];
  arr.length = len - 1;
  return out;
}

function push(arr) {
  for (var i = 1; i < arguments.length; i++) { arr[arr.length] = arguments[i]; }
  return arr.length;
}


// pop
var array = [1, 2, 3];
pop(array);                        // 3
console.log(array);                // [1, 2]
pop([]);                           // undefined
pop([1, 2, ['a', 'b', 'c']]);      // ["a", "b", "c"]

// push
var array = [1, 2, 3];
push(array, 4, 5, 6);              // 6
console.log(array);                // [1, 2, 3, 4, 5, 6]
push([1, 2], ['a', 'b']);          // 3
push([], 1);                       // 1
push([]);                          // 0


// 6. Array and String Reverse

// In this exercise, you will implement your own version of the Array.prototype.reverse method. Your implementation should differ from the built-in method in the following two ways:

    // It should accept either a string or an array as an argument.
    // It should return a new string or array.


function reverse(input) {
  if (typeof(input) === "string") { // string
    return input.split('').reverse().join('');
  } else if (Array.isArray(input)) { // array
    return input.slice().reverse(); // unknown
  } else {
    return null;
  }
}

reverse('Hello');           // "olleH"
reverse('a');               // "a"
reverse([1, 2, 3, 4]);      // [4, 3, 2, 1]
reverse([]);                // []

var array = [1, 2, 3];
reverse(array);             // [3, 2, 1]
array;                      // [1, 2, 3]


// 7. Array Shift and Unshift

// In this exercise, you will implement your own versions of the Array.prototype.shift and Array.prototype.unshift methods. These methods manipulate the contents of an array starting from the first index.

// The shift method removes the first element from an array and returns that element; if the array is empty, shift returns undefined. The unshift method adds one or more elements to the start of an array and returns the new length of the array. Both methods mutate the original array.

function shift(arr) {
  var len = arr.length;
  if (len === 0) return undefined;
  var out = arr[0];

  for (var i = 0; i < len - 1; i++) { arr[i] = arr[i + 1]; }
  arr.length = len - 1;
  return out;
}

function unshift(arr) {
  var arrLen = arr.length;
  var argLen = arguments.length;

  for (var i = arrLen - 1; i >= 0; i--) { arr[i + argLen - 1] = arr[i]; } // shift elements right
  for (var i = 0; i < argLen - 1; i++) { arr[i] = arguments[i + 1]; } // copy new elements

  return arr.length;
}

// alternatively, using splice and ... to reconstruct/deconstruct extra args

function unshift(arr, ...args) {
  arr.splice(0, 0, ...args);
  return arr.length;
}


shift([1, 2, 3]);                // 1
shift([]);                       // undefined
shift([[1, 2, 3], 4, 5]);        // [1, 2, 3]

unshift([1, 2, 3], 5, 6);        // 5
unshift([1, 2, 3]);              // 3
unshift([4, 5], [1, 2, 3]);      // 3

var testArray = [1, 2, 3];
shift(testArray);                // 1
testArray;                       // [2, 3]
unshift(testArray, 5);           // 3
testArray;                       // [5, 2, 3]
