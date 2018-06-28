/*

Practice Problem: Octal

Write a Function named octalToDecimal that performs octal to decimal conversion. When invoked on a String that contains the representation of an octal number, the Function returns a decimal version of that value as a Number. Implement the conversion yourself: do not use something else to perform the conversion for you.

*/

function octalToDecimal(numStr) {
  var dgtArr = numStr.split('').reverse().map(Number);

  return dgtArr.map((dgt, idx) => dgt * Math.pow(8, idx))
               .reduce((acc, elm) => acc + elm, 0);
}

octalToDecimal('1');           // 1
octalToDecimal('10');          // 8
octalToDecimal('130');         // 88
octalToDecimal('17');          // 15
octalToDecimal('2047');        // 1063
octalToDecimal('011');         // 9
