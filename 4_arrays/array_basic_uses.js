/*

Practice Problems: Basic Array Uses

In the problems below, we ask you to write functions that work with Arrays. You may use Array's index access ([]), the length property, and any Array Methods you need.

*/


// 1. Write a function that returns the first element of an array passed in as an argument.

function firstElementOf(arr) {
  return arr[0];
}

console.log(firstElementOf(['U', 'S', 'A']));  //  "U"


// 2. Write a function that returns the last element of an array passed in as an argument.

function lastElementOf(arr) {
  return arr[arr.length - 1];
}

console.log(lastElementOf(['U', 'S', 'A']));  //  "A"


// 3. Write a function that accepts two arguments, an array and an integer index position, and returns the element at the given index. What happens if the index is greater than the length of the array? What happens if it is a negative integer?

function nthElementOf(arr, index) {
  return arr[index];
}

var digits = [4, 8, 15, 16, 23, 42];

console.log(nthElementOf(digits, 3));   //  16
console.log(nthElementOf(digits, 8));   // what does this return? undefined
console.log(nthElementOf(digits, -1));  // what does this return? undefined


// 4. Can we insert data into an array at a negative index? If so, why is this possible?

// yes, javascript interpreter allows assigning values to negative indices:

var arr = [1, 2, 3];
arr[-5] = 'hi';

console.log(arr); // [  1, 2, 3, '-5': 'hi' ]
console.log(arr[-5]); // 'hi'


// 5. Write a function that accepts an array as the first argument and an integer value, count, as the second. It should return a new array that contains the first count elements of the array.

function firstNOf(arr, count) {
  return arr.slice(0, count);
}

var digits = [4, 8, 15, 16, 23, 42];
console.log(firstNOf(digits, 3));    //  [4, 8, 15]


// 6. Write a function like the previous one, except this time return the last count elements as a new array.

function lastNOf(arr, count) {
  return arr.slice(arr.length - count);
}

var digits = [4, 8, 15, 16, 23, 42];
console.log(lastNOf(digits, 3));    //  [16, 23, 42]


// 7. Using the function from the previous problem, What happens if you pass a count greater than the length of the array? How can you fix the function so it returns a new instance of the entire array when count is greater than the array length?

console.log(lastNOf(digits, 8));    //  [23, 42]

// due to negative indices, the slice method chooses elements from the end of the array.


function lastNOf(arr, count) {
  var idx = Math.max(arr.length - count, 0); // to prevent negative indices

  return arr.slice(idx);
}

console.log(lastNOf(digits, 8));    //  [ 4, 8, 15, 16, 23, 42 ]


// 8. Write a function that accepts two arrays as arguments and returns an array with the first element from the first array and the last element from the second array.

function endsOf(beginningArr, endingArr) {
  return [beginningArr[0], endingArr[endingArr.length - 1]];
}

console.log(endsOf([4, 8, 15], [16, 23, 42]));  //  [4, 42]
