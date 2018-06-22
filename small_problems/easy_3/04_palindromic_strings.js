/*

Palindromic Strings Part 1

Write a function that returns true if the string passed as an argument is a palindrome, or false otherwise. A palindrome reads the same forwards and backwards. For this problem, the case matters and all characters matter.

Examples:

isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true

*/

function isPalindrome(str) {
  var i;
  var arr = str.split('');
  var arrRev = arr.slice().reverse();

  for (i = 0; i < arr.length; i += 1) { if (arr[i] !== arrRev[i]) return false; }
  return true;
}

// Alternatively we can use the string equality operator:

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true
