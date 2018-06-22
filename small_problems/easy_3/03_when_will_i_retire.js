/*

When Will I Retire

Build a program that logs when the user will retire and how many more years the user has to work until retirement.

Example:

What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!

*/

function whenRetire() {
  var ageNow = parseInt(prompt('What is your age? '), 10);
  var ageRetire = parseInt(prompt('At what age would you like to retire? '), 10);
  var yearNow = new Date().getFullYear();
  var yearRetire = yearNow + (ageRetire - ageNow);

  console.log('It\'s ' + String(yearNow) + '. You will retire in ' + String(yearRetire) + '.');
  console.log('You have only ' + String(ageRetire - ageNow) + ' years of work to go!');
}

whenRetire();
