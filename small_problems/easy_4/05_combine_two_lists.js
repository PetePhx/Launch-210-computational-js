/*

Combine Two Lists

Write a function that combines two arrays passed as arguments, and returns a new array that contains all elements from both array arguments, with each element taken in alternation.

You may assume that both input arrays are non-empty, and that they have the same number of elements.

Example:

interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]

*/

function interleave(arr1, arr2) {
  var result = [];
  var resLength = 2 * arr1.length;
  var i;
  for (i = 0; i < resLength; i += 1) {
    result[i] = (i % 2 === 0 ? arr1[i / 2] : arr2[(i - 1) / 2]);
  }

  return result;
}

interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]
interleave([], []);    // []
