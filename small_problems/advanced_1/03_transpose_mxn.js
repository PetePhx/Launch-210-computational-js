/*

Transpose MxN

In the previous exercise, you wrote a function that transposed a 3x3 matrix represented by an array of arrays.

Matrix transposes are not limited to 3x3 matrices, or even square matrices. Any matrix can be transposed simply by switching columns with rows.

Modify your transpose function from the previous exercise so that it works with any MxN matrix with at least one row and one column.

*/

/*
input: M bn N matrix (nested array)
outputL N by M transpose of the input array

rules: don't change the input array

algorithm:
    - initialize an N by M empty matrix (newMat);
    - loop through original matrix rows and columns, i and j
      - newMat[j][i] = mat[i][j]
  - return newMat
*/

function transpose(mat) {
  if (mat.length === 0) return [];
  var newMat = Array(mat[0].length).fill();
  newMat.forEach((_, idx) => newMat[idx] = Array(mat.length).fill(0));

  for (let i = 0; i < mat.length; i += 1) {
    for (let j = 0; j < mat[0].length; j += 1) {
      newMat[j][i] = mat[i][j];
    }
  }

  return newMat;
}

console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]

console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]

console.log(transpose([]));  // [], a zero by zero matrix
console.log(transpose([[], [], []]));  // [], 3 by zero matrix is also mapped to 0x0
