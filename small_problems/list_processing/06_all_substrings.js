/*

All Substrings

Write a function that returns a list of all substrings of a string. Order the returned list by where in the string the substring begins. This means that all substrings that start at position 0 should come first, then all substrings that start at position 1, and so on. Since multiple substrings will occur at each position, return the substrings at a given position from shortest to longest.

You may (and should) use the substringsAtStart function you wrote in the previous exercise:

*/


function substrings(str) {
  return flat(Array(str.length).fill().map((_, idx) => substringsAtStart(str.slice(idx))));
}

function substringsAtStart(str) {
  return Array(str.length).fill().map((_, idx) => str.slice(0, idx + 1));
}

function flat(arr) {
  return arr.reduce((acc, elm) =>
    { Array.isArray(elm) ? acc.push(...elm) : acc.push(elm); return acc; }, []);
}

console.log(substrings('abcde'));

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]
