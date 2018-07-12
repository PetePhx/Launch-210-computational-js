/*

Merge Sorted Lists

Write a function that takes two sorted arrays as arguments, and returns a new array that contains all the elements from both input arrays in sorted order.

You may not provide any solution that requires you to sort the result array. You must build the result array one element at a time in the proper order.

Your solution should not mutate the input arrays.

*/

/*
input: two presorted arrays
output: an array combining the elements of the two arrays, in sorted order

rules:
  - don't mutate the input arrays

algorithm:
    - copy input arrays to new arrays arr1 and arr2
    - initialize a new output array
    - while arr1 and arr2 are not empty:
      - compare arr1 and arr2 first elements
        - if arr1[0] <= arr2[0], shift an element from arr1 and push to outArr
        - otherwise, shift from arr2 to outArr
      - return outArr concatanated with arr1 and arr2
*/

function merge(array1, array2) {
  var arr1 = array1.slice();
  var arr2 = array2.slice();
  var outArr = [];

  while (arr1.length > 0 && arr2.length > 0) {
    outArr.push((arr1[0] <= arr2[0] ? arr1 : arr2).shift());
  }

  return outArr.concat(arr1).concat(arr2);
}


console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]

console.log(merge([], []));                    // []
console.log(merge(['hi'], ['hello']));         // ['hello', 'hi']
