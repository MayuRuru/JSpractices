//2dimencional arrays | Arrays that contain arrays are also called two-dimensional arrays.
//Write a function that flattens a two-dimensional array with 3 entries.

function flat(arr) {
  let arr1 = arr[0];
  let arr2 = arr[1];
  let arr3 = arr[2];
  let flatarr = arr1.concat(arr2);
  let lastarr = flatarr.concat(arr3);
  return lastarr;
}

// Two-dimensions array | Given a square matrix, calculate the absolute difference between the sums of its diagonals.

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

// Write a function sum that calculates the sum of all elements of a two-dimensional array.

function sum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }
  }
  return sum;
}
