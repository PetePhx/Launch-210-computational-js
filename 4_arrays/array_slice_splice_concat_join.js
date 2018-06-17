// Array Operations: slice, splice, concat, and join

// 1. Write a function named slice that accepts three arguments: an Array, a start index, and an end index. The function should return a new Array that contains values from the original Array starting with the value at the starting index, and including all values up to but not including the end index. Do not modify the original Array.

// You may use functions that were answers to previous practice problems to complete this problem, but do not use any built-in Array methods.

function slice(arr, startIdx, endIdx) {
  var result = [];
  startIdx = Math.max(startIdx, 0);
  if (endIdx === undefined) endIdx = arr.length;
  endIdx = Math.min(endIdx, arr.length);

  for (var i = startIdx; i < endIdx; i++) {
    push(result, arr[i]);
  }

  return result;
}

function push(arr, val) {
  arr[arr.length] = val;
  return arr.length;
}

console.log(slice([1, 2, 3, 4, 5], 0, 2));                      // [ 1, 2 ]
console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));  // [ 'b', 'c' ]

// 2. Write a function named splice that accepts three arguments: an Array, a start index, and the number of values to remove. The function should remove values from the original Array, starting with the first index and removing the specified number of values. The function should return the removed values in a new Array.

function splice(arr, idx, num) {
  var result = [];

  for (var i = idx; i < idx + num; i++) { push(result, arr[i]); } // adding values to result
  for (var i = idx; i < arr.length - num; i++) { arr[i] = arr[i + num]; } // removing values from arr

  arr.length = arr.length - num; // chop
  return result;
}

var count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
console.log(count);                                 // [ 1, 2, 8 ]


// 3. Write a function named concat that accepts two Array arguments. The function should return a new Array that contains the values from each of the original Arrays.

function concat(arr1, arr2) {
  var result = [];
  for (var i = 0; i < arr1.length; i++) { push(result, arr1[i]); }
  for (var i = 0; i < arr2.length; i++) { push(result, arr2[i]); }
  return result;
}

console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ]


// 4. Write a function named join that accepts two arguments: an Array and a String. The function should coerce each value in the Array to a String, and then join those values together using the second argument as a separator. You may assume that a separator will always be passed.

// You can call the String() function on any JavaScript value to get its String representation.

function join(arr, sepStr) {
  var result = '';
  if (arr.length === 0) return '';

  for (var i = 0; i < arr.length - 1; i++) { result += String(arr[i]) + sepStr; }
  result += String(arr[arr.length - 1]);

  return result;
}

console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'
console.log(join([1], ' and '));                       // '1'
console.log(join([], ' and '));                        // ''
