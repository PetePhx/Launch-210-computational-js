/*

Searching 101

Write a program that solicits six numbers from the user, then logs a message that describes whether or not the sixth number appears amongst the first five numbers.

Examples:

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in [25, 15, 20, 17, 23].

-----

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 18

The number 18 does not appear in [25, 15, 20, 17, 23].

*/

function sixthAmongFive() {
  var labelArr = ['1st', '2nd', '3rd', '4th', '5th', 'last'];
  var arr = [];
  var i = 0;

  for (i = 0; i < 6; i += 1) {
    arr.push(Number(prompt('Enter the ' + labelArr[i] + ' number: ')));
  }

  if (arr.slice(0, 5).indexOf(arr[5]) >= 0) {
    console.log('The number ' + String(arr[5]) + ' appears in [' + String(arr.slice(0, 5)) + '].');
  } else {
    console.log('The number ' + String(arr[5]) + ' does not appear in [' + String(arr.slice(0, 5)) + '].');
  }

  return (arr.slice(0, 5).indexOf(arr[5]) >= 0);
}

sixthAmongFive();

/*

Further Exploration

What if the problem was looking for a number that satisfies some condition (e.g., a number greater than 25), instead of a specific number? Would the current solution still work? Why or why not? Think about this first before scrolling down.

*/

// we can use the array's .some() method that is similar to ruby's .any() method


var arr = [10, 20, 30, 40, 50];

arr.some(function (elm) { return (elm === 25); }); // false

arr[2] = 25; // arr : [10, 20, 25, 40, 50]

arr.some(function (elm) { return (elm === 25); }); // true
