/*
How Big is the Room

Build a program that asks a user for the length and width of a room in meters, and then logs to the console the area of the room in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time. Use the prompt() function to collect user input.

Example:

Enter the length of the room in meters:
10
Enter the width of the room in meters:
7
The area of the room is 70.00 square meters (753.47 square feet).

*/

function roomArea() {
  var SQFT_IN_SQMT = 10.7639;
  var length = parseInt(prompt('Enter the length of the room in meters:'), 10);
  var width = parseInt(prompt('Enter the width of the room in meters:'), 10);
  var areaM2;
  var areaSqft;

  areaM2 = length * width;
  areaSqft = areaM2 * SQFT_IN_SQMT;

  console.log('The area of the room is ' + areaM2.toFixed(2) + ' square meters (' + areaSqft.toFixed(2) + ' square feet).')
}

roomArea();
