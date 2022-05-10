//Reduce() | Calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.

function aVeryBigSum(ar) {
  return ar.reduce((a, b) => a + b);
}

//


function basicOp(operation, value1, value2) {
  switch (operation) {
      case '+':
          return value1 + value2;
      case '-':
          return value1 - value2;
      case '*':
          return value1 * value2;
      case '/':
          return value1 / value2;
      default:
          return 0;
  }
}


// Math.sqrt(x) returns the square root
// Math.pow(x, y) calculates x to the power of y

// hypotenuse | calculate the length of the hypotenuse of a right triangle. The length of the two legs is passed to the function.

function hypotenuse(leg1, leg2) {
  let x = Math.pow(leg1, 2);
  let y = Math.pow(leg2, 2);
  let z = x + y;
  return Math.sqrt(z);
}

// Math.min() and Math.max() | Write a function that calculates the midrange of 3 numbers. The midrange is the mean of the smallest and largest number.

function midrange(x, y, z) {
  let min = Math.min(x, y, z);
  let max = Math.max(x, y, z);
  let result = (min + max) / 2;
  return result;
}

//Math.PI gives π (roughly 3.14) and Math.E gives Euler's number e (roughly 2.71)
//Write a function area that calculates the area of a circle. The function is given the radius of the circle.

function area(radius) {
  let x = Math.PI;
  let result = x * Math.pow(radius, 2);
  return result;
}

//Math.round() rounds a number to the nearest integer, Math.floor() rounds a number downwards to the nearest integer and Math.ceil() rounds a number upwards to the nearest integer.

function round100(num1) {
  return Math.round(num1 / 100) * 100;
}

//Math.random() returns a pseudo-random number between 0 (inclusive) and 1 (exclusive!!) | Write a function dice that returns like a dice a random number between 1 and 6.

function dice() {
  return Math.floor(Math.random() * 6) + 1;
}

//Write a function repdigit that determines whether a two-digit decimal is a repdigit or not. If the decimal is a repdigit, 'Repdigit!' should be returned, otherwise 'No Repdigit!'.

function repdigit(x) {
  let ones = x % 10;
  let tens = Math.floor(x / 10);
  if (ones === tens) {
    return "Repdigit!";
  }
  return "No Repdigit!";
}

//FIND THE MEDIAN

function findMedian(arr) {
  const mid = Math.floor(arr.length / 2),
    nums = [...arr].sort((a, b) => a - b);
  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
}

// prime | Write a function that checks whether a passed number is prime. In case of a prime number it should return true, otherwise false.

function isPrime(n) {
  if (num < 2) return false;
  const limit = Math.sqrt(num);
  for (let i = 2; i <= limit; ++i) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// other solution:

let i = 1;

while (i++ < num - 1) {
  if (num % i === 0) {
    return false;
  }
}

return num > 1;

// Max | Write a function max that calculates the maximum of an arbitrary number of numbers.

function max() {
  let x = Math.max(...arguments);
  for (let i = 0; i < arguments.length; i++) {
    return x;
  }
}

/* 
If you want to test for NaN, you unfortunately can't use strict equality. NaN is the only value in JavaScript that when compared to itself returns false. That is, NaN === NaN results in false. To check if a value is NaN use the Number.isNaN function:

let input = 'Babylon';
let message;
let age = parseInt(input);
if ( Number.isNaN(age) ) {
  message = 'Input is not a number!';
}

Write a function parseFirstInt that takes a string and returns the first integer present in the string. If the string does not contain an integer, you should get NaN.
 */

function parseFirstInt(string) {
  let input = string;

  for (let i = 0; i < string.length; i++) {
    let x = parseInt(input);
    if (!Number.isNaN(x)) {
      return x;
    }
    input = input.substr(1);
  }
  return NaN;
}
