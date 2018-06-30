/*

Leading Substrings

Write a function that takes a string argument, and returns a list of all substrings that start from the beginning of the string, ordered from shortest to longest.

*/

function substringsAtStart(str) {
  return Array(str.length).fill().map((_, idx) => str.slice(0, idx + 1));
}

console.log(substringsAtStart('abc'));      // ["a", "ab", "abc"]
console.log(substringsAtStart('a'));        // ["a"]
console.log(substringsAtStart('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
console.log(substringsAtStart(''));        // []
