// undefined | Write a function hello having one parameter and returning 'Hello <parameter>!'. If hello is called without an argument, 'Hello world!' should be returned.

function hello(str) {
  if (str === undefined) {
    return "Hello world!";
  }
  return "Hello " + str + "!";
}

//parseInt() | To read a number from a string. Write a function add that takes a string with a summation task and returns its result as a number. Two natural numbers should be added.

function add(string) {
  let num1 = parseInt(string, 10);
  let plus = string.indexOf("+");

  let num2 = string.substr(plus + 1);

  let num2s = parseInt(num2, 10);
  return num2s + num1;
}

//String: replace() | Write a function normalize, that replaces '-' with '/' in a date string.

function normalize(string) {
  let newString = string.replaceAll("-", "/");
  return newString;
}

//String: toUpperCase() | Write a function toCase that takes a string and returns that string in lowercase and uppercase with - as delimiter.

function toCase(string) {
  let result1 = string.toLowerCase();
  let result2 = string.toUpperCase();
  return result1 + "-" + result2;
}

//String: charAt() | Write a function shortcut that takes two strings and returns the initial letters of theses strings.

function shortcut(string1, string2) {
  result1 = string1[0];
  result2 = string2[0];
  return result1 + result2;
}

//String: trim() | Write a function firstChar, which returns the first character that is not a space when a string is passed.

function firstChar(string) {
  let result = string.trim();
  return result.charAt(0);
}

//String: indexOf() | Write a function indexOfIgnoreCase taking two strings and determining the first occurrence of the second string in the first string. The function should be case insensitive.

function indexOfIgnoreCase(string1, string2) {
  let one = string1.toLowerCase();
  let two = string2.toLowerCase();

  result = one.indexOf(two);
  return result;
}

//String: indexOf() with from index | Write a function secondIndexOf, taking two strings and determining the second occurrence of the second string in the first string.

function secondIndexOf(s1, s2) {
  let first = s1.indexOf(s2);
  result = s1.indexOf(s2, first + 1);
  return result;
}

//String: substr() | Write a function firstWord, taking a string and returning the first word in that string. The first word are all characters up to the first space.

function firstWord(string) {
  let untilHere = string.indexOf(" ");
  result = string.substr(0, untilHere);
  return result;
}

//String: split() | Write a function add that takes a string with a summation task and returns its result as a number

function add(string) {
  let numbers = string.split("+").reduce((acc, n) => acc + parseInt(n, 10), 0);

  return numbers;
}
