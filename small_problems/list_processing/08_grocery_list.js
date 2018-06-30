/*

Grocery List

Write a function that takes a grocery list (a two-dimensional array) with each element containing a fruit and a quantity, and returns a one-dimensional array of fruits, in which each fruit appears a number of times equal to its quantity.

*/

function buyFruit(arr) {
  return arr.map(subAry => Array(subAry[1]).fill(subAry[0]))
            .reduce((acc, elm) => { acc.push(...elm); return acc; }, []);
}

// Example:

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
