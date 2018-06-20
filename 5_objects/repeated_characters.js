// Practice Problem: Repeated Characters

// Implement a function that takes a String as an argument and returns an object that contains a count of the repeated characters.

function repeatedCharacters(inputStr) {
  var str = inputStr.toLowerCase();
  var freq = {};
  var out = {};

  for (var i = 0; i < str.length; i++) {
    str[i] in freq ? freq[str[i]]++ : freq[str[i]] = 1;
  }

  for (var key in freq) { if (freq[key] > 1) out[key] = freq[key]; }
  return out;
}

// Note: in line 14 we could use delete instead of copying within the if statement: delete(freq[key]) and just return freq.

console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }

// Note that repeatedCharacters does a bit more than simply count the frequency of each character: it determines the counts, but only returns counts for characters that have a count of 2 or more. It also ignores the case.
