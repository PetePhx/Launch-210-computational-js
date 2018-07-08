/*

1000 Lights

You have a bank of switches before you, numbered from 1 to n. Every switch is connected to exactly one light that is initially off. You walk down the row of switches and toggle every one of them. You walk back to the beginning of the row and start another pass. On this second pass, you toggle switches 2, 4, 6, and so on. On the third pass, you go back to the beginning again, this time toggling switches 3, 6, 9, and so on. You continue to repeat this process until you have gone through n repetitions.

Write a program that takes one argument—the total number of switches—and returns an array of the lights that are on after n repetitions.

*/

/*
input: array size (n)

output: array of size n, binary values for lights on (1) and off(0)

algorithm:
  - all lights are initially off. (array of zeros size n)
   - since array indices are 0 based, we can add an extra element at position 0
    ( so item i has index i)
  - toggling switches is equivalent to adding 1 in base 2
  - loop through 1 to n
    - in each round, starting from k, toggle all indices with multiples of k
  - convert non-zero elements of the array to index numbers
  - remove the zero elements
  - return the array.
*/

function lightsOn(n) {
  var arr = Array(n + 1).fill(0);

  for (let i = 1; i <= n; i += 1) {
    for (let k = i; k <= n; k += i) {
      arr[k] = (arr[k] + 1) % 2;
    }
  }

  return arr.map((elm, idx) => elm * idx).filter(elm => elm > 0);
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
