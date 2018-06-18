/*

Practice Problems: Find Missing Numbers

Write a function that takes a sorted array of integers as an argument, and returns an array that includes all the missing integers (in order) between the first and last elements of the argument.

*/

/*
input: sorted array of integers
output: full array with al integers in between
algo:
  * check to see it the array has at least two elements, otherwise return []
  * starting from arr[0], keep adding integers untill arr[arr.length - 1]
*/

function missing(arr) {
  if (arr.length < 2) return [];
  var result = [];
  var min = arr[0];
  var max = arr[arr.length - 1];

  for (var i = min + 1; i < max; i++) {
    if (arr.indexOf(i) === -1) result.push(i);
  }
  return result;
}

console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []
