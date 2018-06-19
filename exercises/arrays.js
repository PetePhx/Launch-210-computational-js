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


// 8. Array Slice and Splice

// In this exercise, you will implement your own versions of the Array.prototype.slice and Array.prototype.splice methods according to the following specifications.

// The slice function takes three arguments: an array, and two integers representing a begin and an end index. The function returns a new array containing the extracted elements starting from begin up to but not including end. slice does not mutate the original array.

// The splice function changes the contents of an array by deleting existing elements and/or adding new elements. The function takes the following arguments: an array, a start index, a deleteCount, and zero or more elements to be added. The function removes deleteCount number of elements from the array, beginning at the start index. If any optional element arguments are provided, splice inserts them into the array beginning at the start index. The function returns a new array containing the deleted elements, or an empty array ([]) if no elements are deleted. splice mutates the original array.

// Additional specifications:

// slice:
//
//   The values of begin and end will always be integers greater than or equal to 0.
//   If the value of begin or end is greater than the length of the array, set it to equal the length.
//
// splice:
//
//   The values of start and deleteCount will always be integers greater than or equal to 0.
//   If the value of start is greater than the length of the array, set it to equal the length.
//   If the value of deleteCount is greater than the number of elements from start up to the end of the array, set deleteCount to the difference between the array's length and start.
//   Takes optional arguments for elements to add to the array; denoted by the parameters element1 up to elementN. If no elements to add are provided, splice only removes elements from the array.

function slice(array, begin, end) {
  var result = [];
  if (begin > array.length) begin = array.length;
  if (end > array.length) end = array.length;

  for (var i = begin; i < end; i++) { result[i - begin] = array[i]; }

  return result;
}

slice([1, 2, 3], 1, 2);               // [2]
slice([1, 2, 3], 2, 0);               // []
slice([1, 2, 3], 5, 1);               // []
slice([1, 2, 3], 0, 5);               // [1, 2, 3]

var arr = [1, 2, 3];
slice(arr, 1, 3);                     // [2, 3]
arr;                                  // [1, 2, 3]

function splice(array, start, deleteCount, ...elements) {
  if (start > array.length) start = array.length;
  if (deleteCount > array.length - start) deleteCount = array.length - start;
  var result = slice(array, start, start + deleteCount);

  for (var i = start; i < array.length - deleteCount; i++) { array[i] = array[i + deleteCount]; } // shift left
  array.length -= deleteCount;
  for (var i = array.length - 1; i >= start; i--) { array[i + elements.length] = array[i]; } // shift right
  for (var i = 0; i < elements.length; i++) { array[start + i] = elements[i]; } // copy elements to array

  return result;
}

// alternative implementation for splice:
function splice(array, start, deleteCount, ...elements) {
  if (start > array.length) start = array.length;
  if (deleteCount > array.length - start) deleteCount = array.length - start;

  var result = slice(array, start, start + deleteCount);        // the part taken out
  var tail = slice(array, start + deleteCount, array.length);   // the part next to it

  array.length = start;
  array.push(...elements);
  array.push(...tail);

  return result;
}

splice([1, 2, 3], 1, 2);              // [2, 3]
splice([1, 2, 3], 1, 3);              // [2, 3]
splice([1, 2, 3], 1, 0);              // []
splice([1, 2, 3], 0, 1);              // [1]
splice([1, 2, 3], 1, 0, 'a');         // []

var arr = [1, 2, 3];
splice(arr, 1, 1, 'two');             // [2]
arr;                                  // [1, "two", 3]

var arr = [1, 2, 3];
splice(arr, 1, 2, 'two', 'three');    // [2, 3]
arr;                                  // [1, "two", "three"]

var arr = [1, 2, 3];
splice(arr, 1, 0);                    // []
splice(arr, 1, 0, 'a');               // []
arr;                                  // [1, "a", 2, 3]

var arr = [1, 2, 3];
splice(arr, 0, 0, 'a');               // []
arr;                                  // ["a", 1, 2, 3]

// 9. Oddities

// The oddities function takes an array as an argument and returns a new array containing every other element from the input array. The values in the returned array are the first (index 0), third, fifth, and so on, elements of the input array. The program below uses the array returned by oddities as part of a comparison. Can you explain the results of these comparisons?

function oddities(array) {
  var oddElements = [];
  var i;

  for (i = 0; i < array.length; i += 2) {
    oddElements.push(array[i]);
  }

  return oddElements;
}

oddities([2, 3, 4, 5, 6]) === [2, 4, 6];      // false
oddities(['abc', 'def']) === ['abc'];         // false

// since each array is a separate object, the comparison operator === returns false even though the individual array elements are equal in both cases.

// 10. Array Comparison

// The array comparison function that we implemented in the Arrays lesson implicitly assumed that when comparing two arrays, any matching values must also have matching index positions. The objective of this exercise is to reimplement the function so that two arrays containing the same values—but in a different order—are considered equal. For example, [1, 2, 3] === [3, 2, 1] should return true.


function count(arr, elm) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) { if (arr[i] === elm) count++; }
  return count;
}

function areArraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for(var i = 0; i < arr.length; i++) {
    if (count(arr1, arr[i]) !== count(arr2, arr[i])) return false;
  }

  return true;
}

console.log(areArraysEqual([1, 2, 3], [1, 2, 3]));                  // true
console.log(areArraysEqual([1, 2, 3], [3, 2, 1]));                  // true
console.log(areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']));      // true
console.log(areArraysEqual(['1', 2, 3], [1, 2, 3]));                // false
console.log(areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]));            // true
console.log(areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]));            // false
console.log(areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]));            // false
console.log(areArraysEqual([1, 1, 2], [1, 2, 2]));                  // false
console.log(areArraysEqual([1, 1, 1], [1, 1]));                     // false
console.log(areArraysEqual([1, 1], [1, 1]));                        // true
