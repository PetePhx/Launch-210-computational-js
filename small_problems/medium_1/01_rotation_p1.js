/*

Rotation Part 1

Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.

    If the input is not an array, return undefined.
    If the input is an empty array, return an empty array.

Review the test cases below, then implement the solution accordingly.

*/

/*
input: array of 0 or more elements (arr)

output: a new array, rotated version of the input array (first element is put last)
  - newArr

rules:
  - for non-array input, return undefined
  - for empty array input, return an empty array
  - the original array is not mutated

algorithm:
      - validate input,
        - return undefined for non-array, return [] for []
      - initialize a new array, the same size as the old array.
      - loop through arr elements 1 to end
        - newArr[i - 1] = arr[i]
      - newArr[len - 1] = arr[0]

      -Alternetively:
        newArr = arr.slice(1)
        newArr.push(arr[0]);

      - return newArr
*/

function rotateArray(arr) {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length === 0) return [];

  var newArr = arr.slice(1);
  newArr.push(arr[0]);
  return newArr;
}


rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined


// the input array is not mutated
var array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
array;                                 // [1, 2, 3, 4]

rotateArray('hi');                     // undefined
rotateArray([1, [1], [[1]], [[[1]]]]); // [[1], [[1]], [[[1]]], 1]
