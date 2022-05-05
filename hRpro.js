// counting sort | Given a list of integers, count and return the number of times each value appears as an array of integers.
/*
countingSort has the following parameter(s):

    arr[n]: an array of integers

Returns

    int[100]: a frequency array with the values at each index associated with the frequency the value occurred in the original array

*/

function countingSort(arr) {
  //create a new array with the same amount of indices as the array being passed into the function:
  let arrSort = new Array(100).fill(0);
  //“fill” must be included otherwise the values at each of the indices remain undefined, and the array would remain empty.

  for (let num of arr) {
    arrSort[num]++;
  }

  // iterate over the original array that the function is accepting and increment the number at the associated index of by 1

  return arrSort;
}

/////

// Flip the matrix | In a matrix 2nx2n where each cell contains an integer, reverse any of its rows or columns to maximize the sum of the elements in the n x n submatrix located in the upper-left quadrant / return the maximum sum of the elements in the upper-left quadrant of a square matrix

function flippingMatrix(matrix) {
  let x = matrix.length / 2;
  let max = 0;
  let total = 0;

  for (let i = 0; i < x; i++) {
    for (let j = 0; j < x; j++) {
      max = Number.MIN_VALUE;
      max = Math.max(matrix[i][j], max);
      max = Math.max(matrix[i][2 * x - j - 1], max);
      max = Math.max(matrix[2 * x - i - 1][j], max);
      max = Math.max(matrix[2 * x - i - 1][2 * x - j - 1], max);

      total += max;
    }
  }

  return total;
}

////

// Caesar Chiper | In the Caesar Cipher problem we are given a string and a number of positions to shift. Our task is to shift each letter in the string that number of positions.

function caesarCipher(s, k) {
  s = s.split("");
  k = k > 25 ? k % 26 : k;
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  alphabet = alphabet.slice(k) + alphabet.slice(0, k);
  for (let i = 0; i < s.length; i++) {
    if (/[a-zA-Z]/.test(s[i])) {
      let index = s[i].charCodeAt(0) - 97;
      if (index < 0) {
        index = s[i].charCodeAt(0) - 65;
        s[i] = alphabet[index].toUpperCase();
      } else {
        s[i] = alphabet[index];
      }
    }
  }
  return s.join("");
}
