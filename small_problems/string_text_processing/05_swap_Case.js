/*

Swap Case

Write a function that takes a string as an argument, and returns that string with every lowercase letter changed to uppercase and every uppercase letter changed to lowercase. Leave all other characters unchanged.

*/

function swapcase(str) {
  return str.replace(/./g, chr => chr === chr.toUpperCase() ? chr.toLowerCase() : chr.toUpperCase());
}

console.log(swapcase('Kurt Gödel'));             // "kURT gÖDEL"
console.log(swapcase('CamelCase'));              // "cAMELcASE"
console.log(swapcase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"
