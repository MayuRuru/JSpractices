// 2D arrays | Arrays that contain arrays are also called two-dimensional arrays.

//Write a function that flattens a two-dimensional array with 3 entries.

function flat(arr) {
  let arr1 = arr[0];
  let arr2 = arr[1];
  let arr3 = arr[2];
  let flatarr = arr1.concat(arr2);
  let lastarr = flatarr.concat(arr3);
  return lastarr;
}

// 2D | Given a square matrix, calculate the absolute difference between the sums of its diagonals.

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

//Write a function or functions that returns the largest summed number of all the hourglass patterns found in (ar)

function hourglassSum(arr) {
  let hourglasses = [];
  for (let row = 0; row <= 3; row++) {
    for (let col = 0; col <= 3; col++) {
      let sum = 0;

      sum += arr[row][col];
      sum += arr[row][col + 1];
      sum += arr[row][col + 2];
      sum += arr[row + 1][col + 1];
      sum += arr[row + 2][col];
      sum += arr[row + 2][col + 1];
      sum += arr[row + 2][col + 2];

      hourglasses.push(sum);
      console.log(hourglasses);
    }
  }
  return Math.max(...hourglasses);
}
