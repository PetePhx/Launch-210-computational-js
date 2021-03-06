/*
Matching Parentheses

Write a function that takes a string as an argument and returns true if the string contains properly balanced parentheses, false otherwise. Parentheses are properly balanced only when '(' and ')' occur in matching pairs, with each pair starting with '('.
*/

function isBalanced(str) {
  var newStr = str.replace(/[^()]/g, '');
  while (newStr.replace(/\(\)/, '') !== newStr) {
    newStr = newStr.replace(/\(\)/, '');
  }
  return newStr === '' ? true : false;
}

console.log(isBalanced(''));                       // true
console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false
