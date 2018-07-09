/*

Rotation Part 3

Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. The resulting number is called the maximum rotation of the original number.

Write a function that takes an integer as an argument, and returns the maximum rotation of that integer. You can (and probably should) use the rotateRightmostDigits function from the previous exercise.

*/

/*
input: integer
output: number result of a maximum rotation

algorithm:
  - turn number to string
  - loop k from str length down to 1
    - in each oteration rotate the k rightmost letters
  - turn the resulting string to number, return it

*/

function maxRotation(num) {
  var str = String(num);
  var len = str.length;

  for (let k = len; k > 0; k -= 1) {
    str = str.slice(0, len - k) + str.slice(len - k + 1) + str[len - k]
  }

  return Number(str);
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845
