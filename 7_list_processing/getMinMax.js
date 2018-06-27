// using forEach side effects to calculate minmum and maximum values in an array

var min = Infinity;
var max = -Infinity;

[4, 5, 12, 23, 3].forEach(function (value) {
  if (value >= max) {
    max = value;
  }

  if (value <= min) {
    min = value;
  }
});

console.log(min, max); // 3, 23
