//Reduce() | Calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.

function aVeryBigSum(ar) {
  return ar.reduce((a, b) => a + b);
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
