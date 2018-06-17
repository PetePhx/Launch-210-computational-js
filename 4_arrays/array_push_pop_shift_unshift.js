// Array Operations: Push Pop Shift Unshift

// 1. Write a function named push that accepts two arguments: an Array and any other value. The function should append the second argument to the end of the Array, and return the new length of the Array.

function push(arr, val) {
  arr[arr.length] = val;
  return arr.length;
}

var count = [0, 1, 2];
console.log(push(count, 3));         // 4
console.log(count);                  // [ 0, 1, 2, 3 ]

// 2. Write a function named pop that accepts one argument: an Array. The function should remove the last element from the array and return it.

function pop(arr) {
  var elm = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return elm;
}

var count = [1, 2, 3];
console.log(pop(count));             // 3
console.log(count);                  // [ 1, 2 ]



// 3. Write a function named unshift that accepts two arguments: an Array and a value. The function should insert the value at the beginning of the Array, and return the new length of the array. You will need a for loop for this problem.

function unshift(arr, val) {
  for (var i = arr.length; i > 0; i--) { arr[i] = arr[i - 1]; } // shifting right
  arr[0] = val;
  return arr.length;
}

var count = [1, 2, 3];
console.log(unshift(count, 0));      // 4
console.log(count);                  // [ 0, 1, 2, 3 ]

// 4. Write a function named shift that accepts one argument: an Array. The function should remove the first value from the beginning of the Array and return it.

function shift(arr) {
  if (arr === []) return undefined;
  var val = arr[0];
  for (var i = 0; i < arr.length - 1; i++) { arr[i] = arr[i + 1]; } // shifting left
  arr.length = arr.length - 1;
  return val;
}

var count = [1, 2, 3];
console.log(shift(count));           // 1
console.log(count);                  // [ 2, 3 ]
