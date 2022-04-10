// FOR | The for loop consists of three control expressions and the loop code.

/*

let sum = 0;
for (let i = 1; i < 3; i++) {
  sum = sum + i;
}
*/

/* The first is the start expression > It is executed once at the beginning of the loop. The so-called loop variable is normally initialized here.  | The second expression is the loop condition > It is evaluated to true or false before each loop iteration, if evaluates to true the loop code is executed and when evaluates to false the loop is terminated and the program execution continues after the loop |  The final expression is executed after each loop iteration > the loop variable is normally increased here (i++ is identical to i = i + 1). Then a new loop iteration is started with a new evaluation of the loop condition.  */

function addTo(x) {
  let sum = 0;

  for (let i = 0; i <= x; i++) {
    sum += i;
  }
  return sum;
}

// FOR - factorial | The factorial of a positive integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example, 3! = 1*2*3 = 6. By definition, 0! = 1. Write a function factorial that calculates the factorial of a positive integer.

function factorial(n) {
  let sum = 1;
  for (let i = 1; i <= n; i++) {
    sum = sum * i;
  }
  return sum;
}

// FOR - Write a function mean that accepts an array filled with numbers and returns the arithmetic mean of those numbers.

function mean(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  let result = sum / arr.length;
  return result;
}

// WHILE | Write a function spaces that takes a natural number n and returns a string of n spaces.

function spaces(n) {
  let result = "";
  while (result.length < n) {
    result += " ";
  }
  return result;
}

// DO WHILE | THe loop condition is checked AFTER the loop code (so it runs at least once)
// Write a function lcm that takes two natural numbers and calculates their least common multiple (lcm).
// The lcm of two natural numbers a and b is the smallest natural number that is divisible by a and b.

function lcm(a, b) {
  let x = 0;
  let bya;
  let byb;

  do {
    x++;
    bya = x % a;
    byb = x % b;
  } while (bya !== 0 || byb !== 0);
  return x;
}

// The greatest common divisor of two natural numbers a and b is the largest natural numbers that divides a and b.

function gcd(a, b) {
  if (a == 0) return b;
  if (b == 0 || a == b) return a;

  if (a > b) return gcd(a - b, b);
  return gcd(a, b - a);
}

/*Write a function isPrime that checks whether a passed number is prime. In case of a prime number it should return true, otherwise false. */

function isPrime(n) {
  if (n % 1 || n < 2) return false;

  if (n % 2 == 0) return n == 2;

  var m = Math.sqrt(n);

  for (var i = 3; i <= m; i += 2) {
    if (n % i == 0) return false;
  }
  return true;
}

/*  It first checks if the passed value is an even number or not. After this it proceeds to check odd divisors only, from 3 up to square root of the passed value.

At most half of the numbers between 3 and square root of the passed value are checked.*/

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
