//Two-dimensions array | Given a square matrix, calculate the absolute difference between the sums of its diagonals.

function diagonalDifference(arr) {
  let sum1 = 0;
  for (let i = 0; i < arr.length; i++) {
    sum1 += arr[i][i];
  }

  let sum2 = 0;
  let y = 0;
  for (let i = arr.length - 1; i > -1; i--) {
    sum2 += arr[i][y];
    y++;
  }

  return Math.abs(sum2 - sum1);
}

//another solution:

function diagonalDifference(arr) {
  let sum1 = 0;
  for (let i = 0; i < arr.length; i++) {
    sum1 += arr[i][i];
  }

  let sum2 = 0;
  for (y = arr.lenght - 1; y > -1; y--) {
    sum2 += arr[arr.length - 1 - y][y];
  }
  return Math.abs(sum2 - sum1);
}

//Reduce() | Calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.

function aVeryBigSum(ar) {
  return ar.reduce((a, b) => a + b);
}
