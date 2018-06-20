
// Working with the Math Object


// 1. The Math methods that deal with angle measurements all expect and return values in radians instead of degrees. Mathematically, radians are easier to work with, so nearly all languages use radians for circle and arc calculations. To read more about radians, check out this article. Use the Math.PI property to create a function that converts radians to degrees.

function radToDeg(rads) { return rads * 180 / Math.PI; }

console.log(radToDeg(2 * Math.PI)); // 360

// 2. To convert a positive integer to a negative integer, you can just place a minus sign in front of the variable that contains the integer. However, if you don't know whether the original value is negative you may inadvertently convert your variable to the wrong value. You can use the Math.abs method to simplify matters by forcing a value positive. For this problem, create a variable with a value of -180, then use Math.abs to log the positive value of the variable.

var val = -180;

console.log(Math.abs(val)); // 180

// 3. You can calculate the square of a number by multiplying the number by itself. Calculating the square root takes more work. Fortunately, the Math.sqrt method makes this easier than it would otherwise be. Use this method to find the square root of 16777216.

console.log(Math.sqrt(16777216)); // 4096

// 4. Suppose, instead, that we want to calculate the 6th power of a number. We could multiply a number by itself six times with a function. However, it is easier to just use Math.pow. Math.pow takes two arguments, the base and the exponent, and returns the result. Use Math.pow to compute and log the value of 16 to the 6th power.

console.log(Math.pow(16, 6)); // 16777216

//5.  Rounding numbers up or down in JavaScript is easy, but there are three methods that perform different types of rounding. Math.round takes any decimal value and rounds it to the nearest integer. If the fractional part of the number is less than 0.5, Math.round rounds the value downwards; otherwise, it rounds the value upwards. Note: if the fractional part is exactly 0.5, Math.round rounds upwards. Math.floor rounds any number downward to the next lower integer. Math.ceil rounds any number upward to the next higher integer.

// Use the appropriate method on each of these variables to return a value of 50. Make sure you use each method once.

var a = 50.72;
console.log(Math.floor(a)); // 50
var b = 49.2;
console.log(Math.ceil(b)); // 50
var c = 49.86;
console.log(Math.round(c)); // 50

// Math.random returns a random floating-point number between 0 and 1, excluding the exact value of 1. This isn't helpful on its own, since you usually want a random integer between two other integer values. Create a function that takes two arguments, a minimum and a maximum value, and returns a random integer between those numbers (including both of the numbers). Your solution should handle the scenario that the user inadvertently swaps the positions of the min and max values or the scenario that the min and max values are equal. You may assume that the user always provides the min and max values.

function randInt(min, max) {
  if (min === max) return min;
  if (max < min) [min, max] = [max, min];

  return Math.floor((max - min + 1) * Math.random() + min);
}

var distrib = [0, 0, 0, 0, 0, 0];
for (var i = 0; i < 6E6; i++) {
  distrib[randInt(0, 5)]++;
}

console.log(distrib); // [ 1000631, 1000644, 998916, 999718, 1000467, 999624 ]
