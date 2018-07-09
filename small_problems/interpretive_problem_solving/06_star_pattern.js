/*

Seeing Stars

Write a function that displays an 8-pointed star in an nxn grid, where n is an odd integer that is supplied as an argument to the function. The smallest such star you need to handle is a 7x7 grid (i.e., when n is 7).

*/

/*
input: odd integer n larger than 5

output: a star pattern logged to the screen (8 edges)

rules:
    - n rows
    - center row has n stars
    - all other rows have three stars

    - pattern of stars and spaces:
      - row 0: 0 spaces, star, (n-3)/2 spaces, star, (n-3)/2 spaces, star, 0 spaces
      - row 1: 1 space,  star, (n-5)/2 spaces, star, (n-5)/2 space, star, 1 space
      - ...
      - row k: k space, star, (n-2k)/2 space, star, (n-2k)/2 space, star, k space
      ...
      - row (n-1)/2: all start
      - (rest is mirror symmetric to above)

algorithm:
    - initialize an empty array of size (n-1)/2
    - loop though 0 to (n-1)/2 exclusive
      - for row i, assign array[i] to string:
        ' '.repeat(i) + '*' + ' '.repeat((n - 2 * i) / 2) + '*' + ' '.repeat((n - 2 * i) / 2) + '*'

    - concat array with '*'.repeat(n) and array.slice().reverse()
    - log
*/

function star(n) {
  if (n % 2 !== 1 || n < 7) return undefined;
  var arr = Array((n - 1) / 2).fill('');

  for (let i = 0; i < (n - 1) / 2; i += 1) {
    arr[i] = ' '.repeat(i) + '*' + ' '.repeat((n - 2 * i - 2) / 2) +
             '*' + ' '.repeat((n - 2 * i - 2) / 2) + '*';
  }

  arr.concat('*'.repeat(n))
     .concat(arr.slice().reverse())
     .forEach(row => console.log(row));
}


star(7);
// logs
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *

star(9);
// logs
// *   *   *
//  *  *  *
//   * * *
//    ***
// *********
//    ***
//   * * *
//  *  *  *
// *   *   *

star(13);

star(6);
