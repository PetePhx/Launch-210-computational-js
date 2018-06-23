/*

09. How Many

Write a function that counts the number of occurrences of each element in a given array. Once counted, log each element alongside the number of occurrences.

Example:

var vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
car => 4
truck => 3
SUV => 1
motorcycle => 2

*/

function countOccurrences(arr) {
  var result = {};
  arr.forEach(function (elm) { result[elm] ? result[elm] += 1 : result[elm] = 1; });
  Object.keys(result).forEach(function (key) { console.log(key, '=>', result[key]); });
}

var vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// alternatively, we could use for ... in ... instead of Object.keys()

function countOccurrences(arr) {
  var result = {};
  arr.forEach(function (elm) { result[elm] ? result[elm] += 1 : result[elm] = 1; });
  for (key in result) { console.log(key, '=>', result[key]); }
}
