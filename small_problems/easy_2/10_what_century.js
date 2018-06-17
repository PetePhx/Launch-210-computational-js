/*
What Century is That

Write a function that takes a year as input and returns the century. The return value should be a string that begins with the century number, and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

New centuries begin in years that end with 01. So, the years 1901 - 2000 comprise the 20th century.

Examples:

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"

*/

/*
input: year (num)
output: century + suffix

algo
  * find the century number:
    cent = Math.ceil(num / 100)

  * find the suffix
    switch (cent % 10)
      case 1:
        (cent % 100 === 11 ? 'th' : 'st')
      case 2:
        (cent % 100 === 12 ? 'th' : 'nd')
      default:
        'th'
  * return cent.toString() + suffix
*/

function century(yr) {
  var cent = Math.ceil(yr / 100);
  var suf = centurySuffix(cent);

  return cent.toString() + suf;
}

function centurySuffix(cent) {
  var suffix;

  switch (cent % 10) {
    case 1:
      suffix = (cent % 100 === 11 ? 'th' : 'st');
      break;
    case 2:
      suffix = (cent % 100 === 12 ? 'th' : 'nd');
      break;
    case 3:
      suffix = (cent % 100 === 13 ? 'th' : 'rd');
      break;
    default:
      suffix = 'th';
  }

  return suffix;
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"
