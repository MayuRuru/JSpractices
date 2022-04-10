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

/////

//Reduce() | Calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.

function aVeryBigSum(ar) {
  return ar.reduce((a, b) => a + b);
}

// if..else | Write a function addWithSurcharge that adds two amounts with surcharge. For each amount less than or equal to 10, the surcharge is 1. For each amount greater than 10, the surcharge is 2.

function addWithSurcharge(x, y) {
  let surcharge = 0;
  if (x <= 10) {
    surcharge += 1;
  } else {
    surcharge += 2;
  }

  if (y <= 10) {
    surcharge += 1;
  } else {
    surcharge += 2;
  }

  return x + y + surcharge;
}

// else if | Write a function addWithSurcharge that adds two amounts with surcharge. For each amount less than or equal to 10, the surcharge is 1. For each amount greater than 10 and less than or equal to 20, the surcharge is 2. For each amount greater than 20, the surcharge is 3.

function addWithSurcharge(x, y) {
  let surcharge = 0;

  if (x <= 10) {
    surcharge += 1;
  } else if (x > 10 && x <= 20) {
    surcharge += 2;
  } else if (x > 20) {
    surcharge += 3;
  }

  if (y <= 10) {
    surcharge += 1;
  } else if (y > 10 && y <= 20) {
    surcharge += 2;
  } else if (y > 20) {
    surcharge += 3;
  }

  return x + y + surcharge;
}

//Write a function setFirstElement that takes an array and an arbitrary variable. The variable should be inserted as the first element in the array.

function setFirstElement(arr, x) {
  arr[0] = x;
  return arr;
}

//Array.length | Write a function getLastElement that takes an array and returns the last element of the array.

function getLastElement(arr) {
  let last = arr.length - 1;
  return arr[last];
}

// Array.shift() | The array method shift removes the first element from an array and returns that element. The length of the array is reduced by 1.
// Array.push() | The method push adds a new element to an array. The new element is passed as a parameter and is added to the end of the array.
// Write a function rotate that rotates the elements of an array. All elements should be moved one position to the left. The 0th element should be placed at the end of the array. The rotated array should be returned.

function rotate(arr) {
  let x = arr.shift();
  arr.push(x);
  return arr;
}

// Array.indexOf() | The indexOf method returns the first index at which a given element can be found in the array, or -1 if it is not present. Counting starts with 0.
// Write a function add that adds an element to the end of an array. However, the element should only be added if it is not already in the array.

function add(arr, x) {
  if (arr.indexOf(x) === -1) {
    arr.push(x);
  }
  return arr;
}

// Array.concat() | Using the concat method you can concatenate two arrays.
// Write a function concatUp that concatenate two arrays. The longer array should be appended to the shorter array. If both arrays are equally long, the second array should be appended to the first array.

function concatUp(a1, a2) {
  if (a2.length >= a1.length) {
    return a1.concat(a2);
  }
  return a2.concat(a1);
}

// Array.join() | Write a function list that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'. An empty array should return an empty string.

// Array.slice() | With slice you can copy a subarray from an array. The first parameter specifies the start index (included) and the second parameter specifies the end index (excluded).

//2dimencional arrays | Arrays that contain arrays are also called two-dimensional arrays.
//Write a function flat that flattens a two-dimensional array with 3 entries.

function flat(arr) {
  let arr1 = arr[0];
  let arr2 = arr[1];
  let arr3 = arr[2];
  let flatarr = arr1.concat(arr2);
  let lastarr = flatarr.concat(arr3);
  return lastarr;
}

//Write a function max that calculates the maximum of an arbitrary number of numbers.

function max() {
  let x = Math.max(...arguments);
  for (let i = 0; i < arguments.length; i++) {
    return x;
  }
}
