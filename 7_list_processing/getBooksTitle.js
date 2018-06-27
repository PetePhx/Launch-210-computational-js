/*
Let's build a function that takes an array of book objects as an argument and returns an array of book titles. Your function should use myMap.
*/

function getBooksTitle(books) {
  return myMap(books, getTitle);
}

function myMap(arr, func) {
  var out = Array(arr.length);
  arr.forEach((elm, idx) => { out[idx] = func(elm); });
  return out;
}

var getTitle = function (book) {
  return book['title'];
};

var books = [
  {
    title: 'JavaScript and JQuery: Interactive Front-End Web Development',
    author: 'Jon Ducket',
    edition: '1st',
  },
  {
    title: 'Eloquent JavaScript: A Modern Introduction to Programming',
    author: 'Haverbeke',
    edition: '2nd',
  },
  {
    title: "Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics",
    author: 'Jennifer Niederst Robbins',
    edition: '4th',
  },
];

console.log(getBooksTitle(books));
// console output
// [
//   "JavaScript and JQuery: Interactive Front-End Web Development",
//   "Eloquent JavaScript: A Modern Introduction to Programming",
//   "Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics"
// ]
