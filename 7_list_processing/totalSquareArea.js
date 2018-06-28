/*

Practice Problem: Total Square Area

For this practice problem, we'll represent rectangles as Arrays with two elements: a height and a width.

Write a Function named totalArea that takes an Array of rectangles as an argument. The Function should return the total area covered by all the rectangles.

*/

function totalArea(rectArr) {
  return rectArr.map(pair => pair[0] * pair[1]).reduce((acc, elm) => acc + elm, 0);
}


var rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

totalArea(rectangles);    // 141

/*
Now, write a second Function named totalSquareArea. This Function should calculate the total area of a set of rectangles, just like totalArea. However, it should only include squares in its calculations: it should ignore rectangles that aren't square.

var rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

*/

function totalSquareArea(rectArr) {
  return rectArr.filter(pair => pair[0] === pair[1])
                .map(pair => pair[0] * pair[1])
                .reduce((acc, elm) => acc + elm, 0);
}


totalSquareArea(rectangles);    // 121
