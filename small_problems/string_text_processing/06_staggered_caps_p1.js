/*

Staggered Caps Part 1

Write a function that takes a string as an argument, and returns that string with a staggered capitalization scheme. Every other character, starting from the first, should be capitalized and should be followed by a lowercase or non-alphabetic character. Non-alphabetic characters should not be changed, but should be counted as characters for determining when to switch between upper and lower case.

*/

function staggeredCase(str) {
  return str.split('')
            .map((c, idx) => idx % 2 === 0 ? c.toUpperCase() : c.toLowerCase())
            .join('');
}

function staggeredCase(str) {
  return str.replace(/(.)(.)?/g, function (pair) {
    return [pair[0].toUpperCase(), pair[1] ? pair[1].toLowerCase() : ''].join('');
  });
}

console.log(staggeredCase('abc'));                          // "AbC"
console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 NuMbErS"
