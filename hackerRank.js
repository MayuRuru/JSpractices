//Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with places after the decimal.

function plusMinus(arr) {
  let length = arr.length;
  let pos = arr.filter((n) => n > 0).length;
  let neg = arr.filter((n) => n < 0).length;
  let zero = arr.filter((n) => n == 0).length;

  function ratio(num) {
    return console.log(parseFloat(num / length).toFixed(6));
  }

  ratio(pos);
  ratio(neg);
  ratio(zero);
}

/*
This is a simple and fast solution:

you can use the filter function to iterate in the array and get a new array only with the numbers that fulfill the condition; positive (n> 0), negative (n <0) and neutral (n == 0) numbers. In the same variable you can calculate the size of the returned array and divide it by the size of the original array, so you get the fraction, which you must format to only 6 decimal places with toFixed(6) and print an output in the requested format.

function plusMinus(arr) {
    let positive = arr.filter(number => number > 0).length / arr.length;
    let negative = arr.filter(number => number < 0).length / arr.length;;
    let zeronums = arr.filter(number => number == 0).length / arr.length;;

    return console.log(positive.toFixed(6) + '\n' + negative.toFixed(6) + '\n' + zeronums.toFixed(6))
}

Another:

function plusMinus(arr) {
    let pos = 0;
    let neg = 0;
    let zero = 0;
    for (let n = 0; n<=arr.length; n++) {
        if (n=0) zero +=1;
        if (n>0) pos +=1;
        if (n<0) neg +=1;
    } 
    let ratpos = (pos/arr.length).toFixed(6);
    let ratneg = (neg/arr.length).toFixed(6);
    let ratzero = (zero/arr.length).toFixed(6);
    
   console.log(ratpos, ratneg, ratzero);
}
*/

function staircase(n) {
  for (let i = 1; i <= n; i++) {
    // print out a " " n-i times and append a # i times
    // console log adds a new line by default
    //REPEAT METHOD

    console.log(" ".repeat(n - i) + "#".repeat(i));
  }
}

//Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

function miniMaxSum(arr) {
  let sum = arr.reduce((a, b) => {
    return a + b;
  });
  const min = sum - Math.max(...arr);
  const max = sum - Math.min(...arr);
  console.log(min + " " + max);
}

//Count how many candles are tallest:

function birthdayCakeCandles(candles) {
  let tallest = 0;
  let max = Math.max(...candles);

  for (let i = 0; i < candles.length; i++) {
    if (candles[i] == max) {
      tallest++;
    }
  }
  return tallest;
}

//

function gradingStudents(grades) {
  return grades.map((n) => {
    let round = 5 - (n % 5);

    if (round < 3 && n >= 38) {
      n += round;
    }
    return n;
  });
}

//Given a time in -hour AM/PM format, convert it to military (24-hour) time.

function timeConversion(s) {
  let AMPM = s.slice(-2);
  let timeArr = s.slice(0, -2).split(":");
  if (AMPM === "AM" && timeArr[0] === "12") {
    // catching edge-case of 12AM
    timeArr[0] = "00";
  } else if (AMPM === "PM") {
    // everything with PM can just be mod'd and added with 12 - the max will be 23
    timeArr[0] = (timeArr[0] % 12) + 12;
  }
  return timeArr.join(":");
}

// Lonely | Given an array of integers, where all elements but one occur twice, find the unique element.
function lonelyInteger(a) {
  let unique = a.filter(function (value) {
    return a.indexOf(value) === a.lastIndexOf(value);
  });

  return unique[0];
}
