/*

Letter Counter Part 2

Modify the wordSizes function from the previous exercise to exclude non-letters when determining word size. For instance, the word size of "it's" is 3, not 4.

Examples:

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "5": 1, "2": 1, "3": 1 }
wordSizes('');                                            // {}

*/

function wordSizes(str) {
  var sizesObj = {};
  var wordsArr = str.split(' ');

  if (str === '') return sizesObj;
  wordsArr.forEach(function (word) {
    var key = String(word.replace(/[^a-z]/ig, '').length); // change here
    sizesObj[key] ? sizesObj[key] += 1 : sizesObj[key] = 1;
  });

  return sizesObj;
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "5": 1, "2": 1, "3": 1 }
wordSizes('');                                            // {}
