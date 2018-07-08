/*

Diamonds

Write a function that displays a four-pointed diamond in an nxn grid, where n is an odd integer supplied as an argument to the function. You may assume that the argument will always be an odd integer.

*/

/*
input: odd integer n

output: log a n-by-n diamond to the screen

sample: 5

row 0: 2 x ' ', one '*', two x ' '
row 1: 1 x ' ', three '*', one ' '
row 2:          five '*'
row 3: 1 x ' ', three '*', one ' '
row 4: 2 x ' ', one '*', two x ' '

for row k between 0 to (n - 1) / 2:

  (n - 1) / 2 - k ' ', (2 * k + 1) '*', (n - 1) / 2 - k ' '

algorithm:

  - initialize array of size (n + 1) / 2
  - for k from 0 to (n - 1) / 2:
    - build the string, assign to arr[k]
    - concat the array to array reversed without the last element
  - log the elements of the resulting array

*/

function diamond(n) {
  if (n % 2 !== 1) return null;
  var arr = Array((n + 1) / 2).fill();

  for (let k = 0; k < (n + 1) / 2; k += 1) {
    arr[k] = ' '.repeat((n - 1) / 2 - k) + '*'.repeat(2 * k + 1) + ' '.repeat((n - 1) / 2 - k);
  }

  arr.concat(arr.slice(0, -1).reverse()).forEach(elm => console.log(elm));
}

diamond(1);
// logs
// *

diamond(3);
// logs
//  *
// ***
//  *

diamond(9);
// logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
