/*

String StartsWith

Implement a function that determines whether a string begins with another string. If it does, the function should return true, or false otherwise.
Examples

function startsWith(string, searchString) {
  // ...
}

var str = 'We put comprehension and mastery above all else';
startsWith(str, 'We');              // true
startsWith(str, 'We put');          // true
startsWith(str, '');                // true
startsWith(str, 'put');             // false

var longerString = 'We put comprehension and mastery above all else!';
startsWith(str, longerString);      // false
*/

/*
Inputs: string, substr (can be empty)
Output: boolean: whether str starts with substr

Algo:
  * check if substr is empty: return true
  * loop through substr characters
    * in each iteration compare str[i] and substr[i]
      * if not equal, return false
  * return true
*/

function startsWith(str, substr) {
  if (typeof(str) !== 'string' || typeof(substr) !== 'string') return undefined;

  for (i = 0; i < substr.length; i++) {
    if (substr[i] !== str[i]) return false;
  }
  return true;
}

var str = 'We put comprehension and mastery above all else';
console.log(startsWith(str, 'We'));              // true
console.log(startsWith(str, 'We put'));          // true
console.log(startsWith(str, ''));                // true
console.log(startsWith(str, 'put'));             // false
