// undefined | Write a function hello having one parameter and returning 'Hello <parameter>!'. If hello is called without an argument, 'Hello world!' should be returned.

function hello(str) {
  if (str === undefined) {
    return "Hello world!";
  }
  return "Hello " + str + "!";
}

// replace() | Write a function that replaces '-' with '/' in a date string.

function normalize(string) {
  let newString = string.replaceAll("-", "/");
  return newString;
}

// toUpperCase() | Write a function that takes a string and returns that string in lowercase and uppercase with - as delimiter.

function toCase(string) {
  let result1 = string.toLowerCase();
  let result2 = string.toUpperCase();
  return result1 + "-" + result2;
}

// charAt() | Write a function that takes two strings and returns the initial letters of theses strings.

function shortcut(string1, string2) {
  result1 = string1[0];
  result2 = string2[0];
  return result1 + result2;
}

// trim() | Write a function which returns the first character that is not a space when a string is passed.

function firstChar(string) {
  let result = string.trim();
  return result.charAt(0);
}

// indexOf() | Write a function taking two strings and determining the first occurrence of the second string in the first string. The function should be case insensitive.

function indexOfIgnoreCase(string1, string2) {
  let one = string1.toLowerCase();
  let two = string2.toLowerCase();

  result = one.indexOf(two);
  return result;
}

// indexOf() with from index | Write a function taking two strings and determining the second occurrence of the second string in the first string.

function secondIndexOf(s1, s2) {
  let first = s1.indexOf(s2);
  result = s1.indexOf(s2, first + 1);
  return result;
}

// substr() | Write a function taking a string and returning the first word in that string. The first word are all characters up to the first space.

function firstWord(string) {
  let untilHere = string.indexOf(" ");
  result = string.substr(0, untilHere);
  return result;
}

// split() | Write a function that takes a string with a summation task and returns its result as a number

function add(string) {
  let numbers = string.split("+").reduce((acc, n) => acc + parseInt(n, 10), 0);

  return numbers;
}

// parseInt() | To read a number from a string. Write a functionthat takes a string with a summation task and returns its result as a number. Two natural numbers should be added.

function add(string) {
  let num1 = parseInt(string, 10);
  let plus = string.indexOf("+");

  let num2 = string.substr(plus + 1);

  let num2s = parseInt(num2, 10);
  return num2s + num1;
}

// reverse() | Write a function that reverses the order of the characters in a string:

function reverse(string) {
  let newstring = string.split("");
  let reversestring = newstring.reverse();
  let result = reversestring.join("");
  return result;
}
