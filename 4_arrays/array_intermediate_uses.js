// Practice Problems: Intermediate Array Uses

// 1. Write a function that creates and returns a new array from its array argument. The new array should contain all values from the argument array whose positions have an odd index.

function oddElementsOf(arr) {
  var result = [];

  for (var i = 1; i < arr.length; i += 2) {
    result.push(arr[i]);
  }

  return result;
}

var digits = [4, 8, 15, 16, 23, 42];

console.log(oddElementsOf(digits));    // returns [8, 16, 42]


// 2. Write a function that takes two arrays and returns a new array whose even positions come from the first array, and whose odd positions come from the second array. Assume that both arrays have equal length.

function combinedArray(evenArr, oddArr) {
  var outArr = [];

  for (var i = 0; i < evenArr.length; i++) {
    outArr[2 * i] = evenArr[i];
    outArr[2 * i + 1] = oddArr[i];
  }

  return outArr;
}

var digits = [4, 8, 15, 16, 23, 42];
var letters = ['A', 'L', 'V', 'A', 'R', 'H'];

console.log(combinedArray(digits, letters));  // returns [4, "A", 8, "L", 15, "V", 16, "A", 23, "R", 42, "H"]


// 3. Write a function that takes an array argument and returns a new array that contains all the argument's elements in their original order followed by all the argument's elements in reverse order.

function ascendDescend(arr) {
  var outArr = [];
  var len = arr.length;

  for (var i = 0; i < len; i++) {
    outArr[i] = arr[i];
    outArr[len + i] = arr[len - i - 1];
  }

  return outArr;
}

// alternatively, use concat(), slice(), and reverse():

function ascendDescend(arr) {
  return arr.concat(arr.slice().reverse());
}

var arr = [1, 2, 3, 4];
console.log(ascendDescend(arr)); // [ 1, 2, 3, 4, 4, 3, 2, 1 ]


// 4. Use the array sort method to create a function that takes an array of numbers and returns a new array of the numbers sorted in descending order. Do not alter the original array.

function sortDescending(arr) {
return arr.slice().sort(function(a, b) { return a - b; }).reverse();
}

var array = [23, 4, 16, 42, 8, 15];
var result = sortDescending(array);  // returns [42, 23, 16, 15, 8, 4]
console.log(result);                 // logs    [42, 23, 16, 15, 8, 4]
console.log(array);                  // logs    [23, 4, 16, 42, 8, 15]


// 5. Write a function that takes an array of arrays as an argument, and returns a new array that contains the sums of each of the sub-arrays.

function sum(arr) {
  var result = 0;
  for (var i = 0; i < arr.length; i++) { result += arr[i]; }
  return result;
}

function matrixSums(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) { result.push(sum(arr[i])); }
  return result;
}

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));  // returns [15, 60, 12]


// 6. Write a function that takes an array, and returns a new array with duplicate elements removed.

function uniqueElements(arr) {
  var result = [];

  for(var i = 0; i < arr.length; i++) { if (result.indexOf(arr[i]) === -1) result.push(arr[i]); }

  return result;
}

console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));  // returns [1, 2, 4, 3, 5]
