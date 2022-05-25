// RECURSION:

function replicate(times, number) {
  let array = [];

  if (times < 0) {
    return array;
  }

  let recursive = (array, times, number) => {
    if (times > 0) {
      array.push(number);
      times--;
      return recursive(array, times, number);
    } else return array;
  };

  return recursive(array, times, number);
}

// DONT GIVE ME 5 | you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

function dontGiveMeFive(start, end) {
  let count = 0;

  for (let i = start; i <= end; i++) {
    if (i.toString().indexOf("5") > -1) {
      continue;
    }
    count++;
  }

  return count;
}

// MIDDLE CHARACTER | You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

const getMiddle = (s) => {
  let result = "";

  let middleIndex = Math.floor(s.length / 2);

  if (s.length % 2 !== 0) {
    result = s[middleIndex];
  } else {
    let middleEven = middleIndex - 1;
    result = s[middleEven] + s[middleIndex];
  }

  return result;
};

// REMOVE THE MINIMUN |  Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

function removeSmallest(numbers) {
  let empty = [];
  let result = [...numbers];
  if (result.length === 0) return empty;

  let smallest = Math.min(...result);

  for (let i = 0; i < result.length; i++) {
    if (result[i] === smallest) {
      result.splice(i, 1);
      break;
    }
  }

  return result;
}

// JADEN CASING STRINGS:

String.prototype.toJadenCase = function () {
  var str = "How can mirrors be real if our eyes aren't real";

  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};

// better:

let newStr = str.split(" ");

newStr.map((word) => word[0].toUpperCase() + word.slice(1));
console.log(word);

return newStr.join(" ");

/// Every | BINGO OR NOT:

function bingo(a) {
  let win = [2, 9, 14, 7, 15];

  let equal = win.every((element) => {
    if (a.includes(element)) {
      return true;
    }
    return false;
  });

  return equal ? "WIN" : "LOSE";
}

// another:

const bingo = (arr) =>
  [2, 9, 14, 7, 15].every((value) => arr.includes(value)) ? "WIN" : "LOSE";

// Complete the function that takes a list of words, and returns the length of the longest word in the list.

function longest(words) {
  let result = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= result) {
      result = words[i].length;
    }
  }
  return result;
}

//another:
const longest = (words) => Math.max(...words.map((x) => x.length));

/// petals

function howMuchILoveYou(nbPetals) {
  let result = "";

  switch (nbPetals % 6) {
    case 0:
      result = "not at all";
      break;
    case 1:
      result = "I love you";
      break;
    case 2:
      result = "a little";
      break;
    case 3:
      result = "a lot";
      break;
    case 4:
      result = "passionately";
      break;
    case 5:
      result = "madly";
      break;
  }

  return result;
}

//another:

const phrases = [
  "I love you",
  "a little",
  "a lot",
  "passionately",
  "madly",
  "not at all",
];

function howMuchILoveYou(n) {
  return phrases[(n - 1) % phrases.length];
}
