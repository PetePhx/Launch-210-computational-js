/*

01. How Old is Teddy

Build a program that randomly generates Teddy's age, and logs it to the console. Have the age be a random number between 20 and 200 (inclusive).

Example Output:

Teddy is 69 years old!

*/

function generateAge(min, max) {
  return Math.floor((max - min + 1) * Math.random()) + min;
}

console.log('Teddy is ' + String(generateAge(20, 200)) + ' years old!');

/*

Further Exploration

The randomBetween function used the Math.floor() method. Would it make a difference if the Math.round() method was used instead?

Also, how can we make the function more robust? What if the user inadvertently gave the inputs in reverse order (i.e., the value passed to min was greater than max)?

*/

// Using Math.round() would result in occasional results one above the range max, as well as lower probability for the min age

// for swapping min and max, we can use [min, max] = [Math.min(min, max), Math.max(min, max)].
