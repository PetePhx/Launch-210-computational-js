/*

Rotation Part 2

Write a function that rotates the last n digits of a number. For the rotation, rotate by one digit to the left, moving the first digit to the end.

*/

/*
input: integer number (num), number of right-most digits to be rotated (k)

output: number with the k rightmost digits rotated

rules:
    - rotation means: mover the left-most digit within the rightmost k digits to the right

algorithm:

  - consider edge cases: k <=0, k > number length
  - turn num to string str,
  - slice str to two parts, left, and the rightmost k
    - str1: str.slice(0, len - k) and str2: str.slice(len - k)

    - rotate str2: str2.slice(1) + str2[0]
  - return (str1 + rotated_str2) turned to number

  - alternatively:
    - return Number(str.slice(0, len - k) + str.slice(len - k + 1) + str[len - k])
*/

function rotateRightmostDigits(num, k) {
  var str = String(num);
  var len = str.length;

  if (k < 0) return null;
  if (k === 0) return num;
  if (k > len) k = len;

  return Number(str.slice(0, len - k) + str.slice(len - k + 1) + str[len - k]);
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917

console.log(rotateRightmostDigits(735291, -5));      // null
console.log(rotateRightmostDigits(735291, 0));      // 735291
console.log(rotateRightmostDigits(735291, 10));      // 352917
