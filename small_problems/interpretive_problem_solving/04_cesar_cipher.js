/*

Caesar Cipher

Write a function that implements the Caesar Cipher. The Caesar Cipher is one of the earliest and simplest ways to encrypt plaintext so that a message can be transmitted securely. It is a substitution cipher in which each letter in a plaintext is substituted by the letter located a given number of positions away in the alphabet. For example, if the letter 'A' is right-shifted by 3 positions, it will be substituted with the letter 'D'. This shift value is often referred to as the key. The "encrypted plaintext" (ciphertext) can be decoded using this key value.

The Caesar Cipher only encrypts letters (including both lower and upper case). Any other character is left as is. The substituted letters are in the same letter case as the original letter. If the key value for shifting exceeds the length of the alphabet, it wraps around from the beginning.

*/

/*

inputs: string (plaintext), key (integer)

outputs: string (ciphertext)

rules:
      - alphabetic characters are rotated by the key amount
      - non-letters are not shifted.
      - n values larger than 26 are wrapped around modulus 26
      - casing is preserved

algorithm:
        - create the trabsformer object:
          - for each letter a-z and A-Z, map it to the shifted letter
          - store the shift transform in a (constant) variable

        - initialize empty array
        - loop though the string characters
          - if character in a-z,A-Z, push SHIFT[char] to the array
          - otherwise push char to the array

        - alternatively, use replace(/[a-z]/ig, func) functionality
*/

function caesarEncrypt(str, key) {
  const SHIFTER = createShifter(key);
  return str.replace(/[a-z]/ig, char => SHIFTER[char]);
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

// console.log(createShifter(27));

// simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"
