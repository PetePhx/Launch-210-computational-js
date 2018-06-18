/*

Clean Up the Words

Given a string that consists of some words and an assortment of non-alphabetic characters, write a function that returns that string with all of the non-alphabetic characters replaced by spaces. If one or more non-alphabetic characters occur in a row, you should only have one space in the result (i.e., the result string should never have consecutive spaces).

Example:

cleanUp("---what's my +*& line?");    // " what s my line "

*/

/*
input: str
output: str with all non-alphabetic chars converted to space, multiple spaces collapsed to one.

algo:
  * replace non-alphabetic chars with space ' '
  * replace multiple space with one.
  * return
*/

function cleanUp(str) {
  var result = str.replace(/[^a-z]/ig, ' ').replace(/\s{2,}/g, ' ');
  return result;
}

// more concisely: result = str.replace(/[^a-z]+/ig, ' ')

console.log(cleanUp("---what's my +*& line?"));
