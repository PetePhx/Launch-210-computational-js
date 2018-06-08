// Set a variable, apples, to 3. Set a second variable, bananas, to 5. Write a conditional using == that checks whether apples is equal to bananas. Log a message if true.

var apples = 3;
var bananas = 5;
console.log(apples == bananas); // false
if (apples == bananas) {
  console.log('Oh No! apples are equal to bananas! :O :O :O');
}

// Set the value of bananas to the string value "3". Use the same conditional as the previous problem.

bananas = '3';
if (apples == bananas) {
  console.log('Oh No! apples are equal to bananas! :O :O :O');
} // Oh No! apples are equal to bananas! :O :O :O

// Change the conditional from the previous practice problem to use === instead. Why doesn't this one output a message?

if (apples === bananas) {
  console.log('Oh No! apples are equal to bananas! :O :O :O');
} // strict equality does not coerce types

// Create an else statement that logs a different message if false.

if (apples === bananas) {
  console.log('Oh No! apples are equal to bananas! :O :O :O');
} else {
  console.log('apples are NOT equal to bananas! cool!');
} // apples are NOT equal to bananas! cool!


// Between the if and else statements, insert an else if statement that checks whether apples == bananas. Log a message stating that the two are the same number but different types.

if (apples === bananas) {
  console.log('Oh No! apples are equal to bananas! :O :O :O');
} else if (apples == bananas) {
  console.log('Hmmm! apples and bananas are the same numebr but of different types!');
} else {
  console.log('apples are NOT equal to bananas! cool!');
}


// Move the else if statement into the else statement and change to an if statement. After your if statement, append an else statement that outputs your "not strictly equal" message as before. The structure of the code should look like:

// else {
//   if (...) {
//     ...
//   }
//   else {
//     ...
//   }
// }

if (apples === bananas) {
  console.log('Oh No! apples are equal to bananas! :O :O :O');
} else {
  if (apples == bananas) {
    console.log('Hmmm! apples and bananas are the same numebr but of different types!');
  } else {
    console.log('apples are NOT equal to bananas! cool!');
  }
} // Hmmm! apples and bananas are the same numebr but of different types!

// Set the variables apples and bananas to 3. Set a variable, areEqual, to the value of apples compared to bananas. This works the same way as the if statements we have been writing, but instead of an if and the condition in parentheses, we just use the condition from within the parentheses as the new value for our variable. Log the value of areEqual.

apples = 3;
bananas = 3;

var areEqual = (apples === bananas);

console.log(areEqual); // true

// Set the value of apples to 3 and bananas to undefined. Set a variable named eitherOr to the value of apples or bananas. This works the same as the previous problem, where you write the comparison as the assignment of the variable. Log the value of eitherOr.
apples = 3;
bananas = undefined;

var eitherOr = (apples || bananas);

console.log(eitherOr); // 3


// Set the value of bananas to 1. Perform the same assignment for eitherOr. Log the value of eitherOr. Afterward, assign bananas || apples to the eitherOr variable. Note that the value is now the bananas variable instead of apples. JavaScript reads this statement from left to right. If the left-side has a truthy value, it is used. Otherwise, the right-side value is used.

apples = 3;
bananas = 1;

eitherOr = (bananas || apples);

console.log(eitherOr); // 1

// The ternary operator is another useful method for defining a variable to one of two possible values. This can also replace an if and else statement, but can sometimes be confusing when used that way.

// Create two new variables, lastName and familyMessage. Set lastName to your last name, then use a ternary that checks whether lastName is equal to your last name to set familyMessage to either "You're part of the family!" or "You're not family."

var lastName = 'Doe';
var familyMessage;
var otherName = 'Though';

familyMessage = ((lastName === otherName) ? "You're part of the family!" : "You're not family.");

console.log(familyMessage); // You're not family.
