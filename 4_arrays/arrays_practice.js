// Practice Problems: Arrays

// 1. With arrays, you can access the first element's value with [0], but how do you access the last value? Write a function named lastInArray that returns the value of the last element in the array provided by the function's argument. You may use the length property and the [] operator, but do not use any other methods or properties.

function lastInArray(arr) {
  return arr[arr.length - 1];
}

console.log(lastInArray([1, 2, 3, 'hi']));

// 2. Create a function named rollCall that takes an array of first names as an argument and logs all the names to the console, one name per line. You should log the names in the same sequence they appear in the array. Use a for loop to process the array.

function rollCall(namesArr) {
  for(var i = 0; i < namesArr.length; i++) {
    console.log(namesArr[i]);
  }
}

rollCall(['name1', 'name2', 'name3']);

// 3. Create a function that returns the contents of the array it receives as an argument, but with the values in reversed order. Your function should use a for loop that iterates over the elements in the array from the end of the array to the beginning, and pushes each element's value to a new result array. Be sure to start your loop with the element whose index is one less than the input array's length.

function reversed(arr) {
  var result = [];

  for (var i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }

  return result;
}

console.log(reversed([1, 2, 3, 'hi']));

// 4. Create a function that finds the first instance of a value in an array and returns the index position of the value, or -1 if the value is not in the array. The function should take two arguments: the value to search for, and the array to search. Use the break keyword to exit the loop immediately when you find the first instance of the value. If you don't find the value, make sure you don't use the final index value as your return value.

// var i;
// for (i = 0; i < array.length; i += 1) {
//   // if match is found
//   break;
// }

function firstInstance(val, arr) {
  var i;
  for (i = 0; i < arr.length; i++) {
    if (val === arr[i]) break;
  }

  return (i < arr.length ? i : -1);
}

console.log(firstInstance('hi', [1, 2, 3, 'hi'])); // 3
console.log(firstInstance('hi', [1, 2, 3, 'hey'])); // -1


// 5. Write a function that returns a string of all the values in an array with no intervening content. For example, your function should return '1a4' if the argument is [1, 'a', 4]. Use a for loop to process the array elements in sequence, and coerce each value in the array to a String before concatenating it to the result string.

function arrToStr(arr) {
  var str = '';

  for (var i = 0; i < arr.length; i++) {
    str += arr[i].toString();
  }

  return str;
}

console.log(arrToStr([1, 2, 3, 'hi'])); // '123hi'
