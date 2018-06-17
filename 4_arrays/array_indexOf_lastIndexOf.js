// Array Operations: indexOf, lastIndexOf

// 1. Write a function indexOf that accepts two arguments: an array and a value. The function returns the first index at which the value can be found, or -1 if the value is not present.

function indexOf(arr, val) {
  for (var i = 0; i < arr.length; i++) { if (val === arr[i]) return i; }
  return -1;
}

console.log(indexOf([1, 2, 3, 3], 3));         // 2
console.log(indexOf([1, 2, 3], 4));            // -1

// 2. Write a function lastIndexOf that accepts two arguments: an array and a value. The function returns the last index at which the value can be found in the array, or -1 if the value is not present.

function lastIndexOf(arr, val) {
  for (var i = arr.length - 1; i >= 0; i--) { if (val === arr[i]) return i; }
  return -1;
}

console.log(lastIndexOf([1, 2, 3, 3], 3));     // 3
console.log(lastIndexOf([1, 2, 3], 4));        // -1
