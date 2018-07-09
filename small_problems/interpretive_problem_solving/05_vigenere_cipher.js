/*

Vigenere Cipher

The Vigenere Cipher encrypts alphabetic text using polyalphabetic substitution. It uses a series of Caesar Ciphers based on the letters of a keyword. Each letter of the keyword is treated as a shift value. For instance, the letter 'B' corresponds to a shift value of 1, and the letter 'd' corresponds to a shift value of 3. In other words, the shift value used for a letter is equal to its index value in the alphabet. This means that the letters 'a'-'z' are equivalent to the numbers 0-25. The uppercase letters 'A'-'Z' are also equivalent to 0-25.

Applying the Vigenere Cipher is done sequentially for each character by applying the current shift value to a Caesar Cipher for that particular character. To make this more concrete, let's look at the following example:

plaintext: Pineapples don't go on pizzas!
keyword: meat

Applying the Vigenere Cipher for each alphabetic character:
plaintext : Pine appl esdo ntgo onpi zzas
shift     : meat meat meat meat meat meat
ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

result: Bmnxmtpeqw dhz'x gh ar pbldal!

Notice that in the example, the key isn't moved forward if the character isn't in the alphabet. Like the Caesar Cipher, the Vigenere Cipher only encrypts alphabetic characters.

Write a function that implements the Vigenere Cipher. The case of the keyword doesn't matter—in other words, the resulting encryption won't change depending on the case of the keyword's letters (e.g., 'MEat' === 'mEaT').

For a quick lookup of a ciphertext per character, you may use a tabula recta. Each row of the table corresponds to a Caesar Cipher encryption using the columns' character letter as a shift value.

*/

/*
input: plaintext string, key string

output: ciphertext

rules: each letter of the keyword is used as a key value to shift a letter of the plaintext

algorithm:

      - create a shifter array, one shift lookup table object for each letter of the key string

      - replace alphabetic characters in the string using the array of lookup tables
        - keep track of the index to shift the index for the lookup table

      - return the ciphertext
*/

function vigenereEncrypt(plaintext, keyStr) {
  const SHIFTER_ARR = createShifterArray(keyStr);
  var idx = 0;

  return plaintext.replace(/[a-z]/ig, char => {
    let newChar = SHIFTER_ARR[idx % keyStr.length][char];
    idx += 1;
    return newChar;
  });
}

// returns an array of objcts, each a lookup object (shifter)
function createShifterArray(str) {
  str = str.toLowerCase().replace(/[^a-z]/ig, '');
  var shifterArr = Array(str.length).fill();

  for (let i = 0; i < str.length; i += 1) {
    shifterArr[i] = createShifter(str.charCodeAt(i) - 'a'.charCodeAt());
  }

  return shifterArr;
}


function createShifter(n) {
  var shifter = {};
  var newCode;
  key = n % 26;

  for (let i = 0; i < 26; i += 1) {
    newCode = (i + key) % 26 + 'A'.charCodeAt();
    shifter[String.fromCharCode(i + 'A'.charCodeAt())] = String.fromCharCode(newCode);
    newCode = (i + key) % 26 + 'a'.charCodeAt();
    shifter[String.fromCharCode(i + 'a'.charCodeAt())] = String.fromCharCode(newCode);
  }

  return shifter;
}

console.log(vigenereEncrypt('Pineapples don\'t go on pizzas!', 'meat'));
// Bmnxmtpeqw dhz'x gh ar pbldal!
console.log(vigenereEncrypt('Pineapples don\'t go on pizzas!', 'Aa'));
// Pineapples don't go on pizzas!
console.log(vigenereEncrypt('Pineapples don\'t go on pizzas!', 'cab'));
// Riogaqrlfu dpp't hq oo riabat!
