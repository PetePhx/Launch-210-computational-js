/*

Letter Counter Part 1

Write a function that takes a string consisting of one or more space separated words, and returns an object that shows the number of words of different sizes.

Words consist of any sequence of non-space characters.

Examples:

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}

*/

function wordSizes(str) {
  var sizesObj = {};
  var wordsArr = str.split(' ');

  if (str === '') return sizesObj;
  wordsArr.forEach(function (word) {
    var key = String(word.length);
    sizesObj[key] ? sizesObj[key] += 1 : sizesObj[key] = 1;
  });

  return sizesObj;
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}
