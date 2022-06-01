// Array.join() | Write a function list that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'. An empty array should return an empty string.

// Array.slice() | With slice you can copy a subarray from an array. The first parameter specifies the start index (included) and the second parameter specifies the end index (excluded).

// Array.shift() | The array method shift removes the first element from an array and returns that element. The length of the array is reduced by 1.

// Array.push() | The method push adds a new element to an array. The new element is passed as a parameter and is added to the end of the array.

// Rotate the elements of an array one position to the left. The 0th element should be placed at the end of the array. The rotated array should be returned.

function rotate(arr) {
  let x = arr.shift();
  arr.push(x);
  return arr;
}

function rotateLeft(d, arr) {
  for (let i = 0; i < d; i++) {
    arr.push(arr.shift());
  }

  return arr;
}

// Circulate array n times

function circularArrayRotation(a, k, queries) {
  for (let i = 0; i < k; i++) {
    a.unshift(a.pop());
  }

  let finalarray = [];

  for (let i = 0; i < queries.length; i++) {
    finalarray.push(a[queries[i]]);
  }
  return finalarray;
}

// Rotate to the left elements by d positions

function rotateLeft(d, arr) {
  return [...arr.slice(d, arr.length), ...arr.slice(0, d)];
}

// if..else | Write a function that adds two amounts with surcharge. For each amount less than or equal to 10, the surcharge is 1. For each amount greater than 10, the surcharge is 2.

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

// else if | Write a function that adds two amounts with surcharge. For each amount less than or equal to 10, the surcharge is 1. For each amount greater than 10 and less than or equal to 20, the surcharge is 2. For each amount greater than 20, the surcharge is 3.

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

// Write a function that takes an array and an arbitrary variable. The variable should be inserted as the first element in the array.

function setFirstElement(arr, x) {
  arr[0] = x;
  return arr;
}

// Array.length | Write a function that takes an array and returns the last element of the array.

function getLastElement(arr) {
  let last = arr.length - 1;
  return arr[last];
}

// Array.indexOf() | The indexOf method returns the first index at which a given element can be found in the array, or -1 if it is not present. Counting starts with 0.

// Write a function that adds an element to the end of an array. However, the element should only be added if it is not already in the array.

function add(arr, x) {
  if (arr.indexOf(x) === -1) {
    arr.push(x);
  }
  return arr;
}

// Array.concat() | Using the concat method you can concatenate two arrays.

// Write a function that concatenate two arrays. The longer array should be appended to the shorter array. If both arrays are equally long, the second array should be appended to the first array.

function concatUp(a1, a2) {
  if (a2.length >= a1.length) {
    return a1.concat(a2);
  }
  return a2.concat(a1);
}

// Reduce | Write a function sum that takes an array of numbers and returns the sum of these numbers.

function sum(arr) {
  let resultsum = arr.reduce((a, b) => a + b);
  return resultsum;
}

// Reduce | Calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.

function aVeryBigSum(ar) {
  return ar.reduce((a, b) => a + b);
}

// Return the average of the numbers of an array.

function mean(arr) {
  return sum(arr) / arr.length;
}

// Array.from:

const replicate = (times, number) =>
  Array.from({ length: times }, (_) => number);

// Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their ids.

function divisibleSumPairs(n, k, ar) {
  let pairs = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let sum = ar[i] + ar[j];
      if (sum % k == 0) {
        pairs++;
      }
    }
  }
  return pairs;
}
