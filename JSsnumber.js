//Reduce() | Calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.

function aVeryBigSum(ar) {
  return ar.reduce((a, b) => a + b);
}

// Math.sqrt(x) returns the square root
// Math.pow(x, y) calculates x to the power of y
// Write a function hypotenuse that calculates the length of the hypotenuse of a right triangle. The length of the two legs is passed to the function.

function hypotenuse(leg1, leg2) {
  let x = Math.pow(leg1, 2);
  let y = Math.pow(leg2, 2);
  let z = x + y;
  return Math.sqrt(z);
}

// Math.min() and Math.max() | Write a function midrange, that calculates the midrange of 3 numbers. The midrange is the mean of the smallest and largest number.

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

function repdigit(x){
  let ones = x%10;
  let tens = Math.floor(x/10);
  if (ones === tens) {
  return 'Repdigit!';}
  return 'No Repdigit!';
  }
