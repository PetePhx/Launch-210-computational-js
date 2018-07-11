/*

Bubble Sort

'Bubble Sort' is one of the simplest sorting algorithms available. Although it is not an efficient algorithm, it is an excellent exercise for student developers. In this exercise, you will write a function that sorts an array using the bubble sort algorithm.

A bubble sort works by making multiple passes (iterations) through an array. On each pass, the two values of each pair of consecutive elements are compared. If the first value is greater than the second, the two elements are swapped. This process is repeated until a complete pass is made without performing any swaps — at which point the array is completely sorted.

6 	2 	7 	1 	4 	Start: compare 6 > 2? Yes
2 	6 	7 	1 	4 	Swap
2 	6 	7 	1 	4 	6 > 7? No (no swap)
2 	6 	7 	1 	4 	7 > 1? Yes
2 	6 	1 	7 	4 	Swap
2 	6 	1 	7 	4 	7 > 4? Yes
2 	6 	1 	4 	7 	Swap

2 	6 	1 	4 	7 	2 > 6? No
2 	6 	1 	4 	7 	6 > 1? Yes
2 	1 	6 	4 	7 	Swap
2 	1 	6 	4 	7 	6 > 4? Yes
2 	1 	4 	6 	7 	Swap
2 	1 	4 	6 	7 	6 > 7? No

2 	1 	4 	6 	7 	2 > 1? Yes
1 	2 	4 	6 	7 	Swap
1 	2 	4 	6 	7 	2 > 4? No
1 	2 	4 	6 	7 	4 > 6? No
1 	2 	4 	6 	7 	6 > 7? No

1 	2 	4 	6 	7 	1 > 2? No
1 	2 	4 	6 	7 	2 > 4? No
1 	2 	4 	6 	7 	4 > 6? No
1 	2 	4 	6 	7 	6 > 7? No
1 	2 	4 	6 	7 	No swaps; all done; sorted

We can stop iterating the first time we make a pass through the array without making any swaps because this means that the entire array is sorted.

For further information — including pseudo-code that demonstrates the algorithm, as well as a minor optimization technique — see the Bubble Sort Wikipedia page.

Write a function that takes an array as an argument and sorts that array using the bubble sort algorithm described above. The sorting should be done "in-place" — that is, the function should mutate the array. You may assume that the array contains at least two elements.

*/

/*
input: array of numbers (arr)
output: bubble-sorted arr, increasing order

rules:
  - mutate the array in place

algorithm:
  - start from the left most number,
    - compare to the next number, if larger, swap,
    - keep moving till the end of the array
  - iterate for the rest of the array elements (extract to bubbleRound())
    - stop in the first round where there was no swapping
  - return the array
*/


function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    if (!bubbleRound(arr)) return arr;
  }

  return arr;
}

function bubbleRound(arr) { // a single round: a bubble rising.
  var swap = false;
  for (let j = 0; j < arr.length - 1; j += 1) {
    if (arr[j] > arr[j + 1]) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      swap = true;
    }
  }

  return swap;
}


var array = [5, 3];
bubbleSort(array);
console.log(array);    // [3, 5]

var array = [6, 2, 7, 1, 4];
bubbleSort(array);
console.log(array);    // [1, 2, 4, 6, 7]

var array = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array);
console.log(array);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

var array = [];
bubbleSort(array);
console.log(array); // []

var array = ['hi'];
bubbleSort(array);
console.log(array); // ['hi']
