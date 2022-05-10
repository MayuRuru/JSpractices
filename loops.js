/* FOR | The first is the start expression > It is executed once at the beginning of the loop. The so-called loop variable is normally initialized here.  | The second expression is the loop condition > It is evaluated to true or false before each loop iteration, if evaluates to true the loop code is executed and when evaluates to false the loop is terminated and the program execution continues after the loop |  The final expression is executed after each loop iteration > the loop variable is normally increased here (i++ is identical to i = i + 1). Then a new loop iteration is started with a new evaluation of the loop condition.  */

function addTo(x) {
  let sum = 0;

  for (let i = 0; i <= x; i++) {
    sum += i;
  }
  return sum;
}

// The factorial of a positive integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example, 3! = 1*2*3 = 6. By definition, 0! = 1. Write a function factorial that calculates the factorial of a positive integer.

function factorial(n) {
  let sum = 1;
  for (let i = 1; i <= n; i++) {
    sum = sum * i;
  }
  return sum;
}

// mean | Write a function that accepts an array filled with numbers and returns the arithmetic mean of those numbers.

function mean(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  let result = sum / arr.length;
  return result;
}

// WHILE | Write a function that takes a natural number n and returns a string of n spaces.

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

// SWITCH

function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
    default:
      return 0;
  }
}

//FIZZBUZZ:

function fizzify(i) {
  if (i % 15 == 0) return "FizzBuzz";
  else if (i % 5 == 0) return "Buzz";
  else if (i % 3 == 0) return "Fizz";
  else return i;
}

// Return an array
function fizzbuzz(n) {
  var res = [];
  for (var i = 1; i <= n; ++i) res.push(fizzify(i));
  return res;
}
