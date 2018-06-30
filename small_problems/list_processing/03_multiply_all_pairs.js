/*

Multiply All Pairs

Write a function that takes two array arguments, each containing a list of numbers, and returns a new array containing the products of all combinations of number pairs that exist between the two arrays. The returned array should be sorted in ascending numerical order.

You may assume that neither argument will be an empty array.

*/

function flat(arr) {
  return arr.reduce((acc, elm) =>
    { Array.isArray(elm) ? acc.push(...elm) : acc.push(elm); return acc }, []);
}

console.log(flat([0, [1], [2, 3]])); // [ 0, 1, 2, 3 ]

function multiplyAllPairs(arr1, arr2) {
  return flat(arr1.map(elm => arr2.map(e => elm * e))).sort((a,b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]
