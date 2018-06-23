/*

02. Combining Arrays

Write a function that takes two arrays as arguments, and returns an array containing the union of the values from the two. There should be no duplication of values in the returned array, even if there are duplicates in the original arrays. You may assume that both arguments will always be arrays.

Example:

union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]

*/

function union(arr1, arr2) {
  var result = [];
  arr1.concat(arr2).forEach(function (elm) {
    if (result.indexOf(elm) === -1) result.push(elm);
  });
  return result;
}


union([1, 3, 5, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]
