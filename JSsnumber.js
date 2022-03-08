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
