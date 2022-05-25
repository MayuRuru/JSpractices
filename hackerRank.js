// compare triplets:

function compareTriplets(a, b) {
  let result = [0, 0];

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      result[0] += 1;
    }
    if (a[i] < b[i]) {
      result[1] += 1;
    }
  }
  return result;
}

// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with places after the decimal.

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

// Staircase:

function staircase(n) {
  for (let i = 1; i <= n; i++) {
    // print out a " " n-i times and append a # i times
    // console log adds a new line by default
    //REPEAT METHOD

    console.log(" ".repeat(n - i) + "#".repeat(i));
  }
}

// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

function miniMaxSum(arr) {
  let sum = arr.reduce((a, b) => {
    return a + b;
  });
  const min = sum - Math.max(...arr);
  const max = sum - Math.min(...arr);
  console.log(min + " " + max);
}

// Count how many candles are tallest:

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

// Birthday chocolate:

function birthday(s, d, m) {
  let ways = 0;
  for (let i = 0; i < s.length; i++) {
    let way = s.slice(i, i + m);
    let sum = way.reduce((a, b) => a + b);
    if (sum == d) {
      ways++;
    }
  }
  return ways;
}

// Grading students:

function gradingStudents(grades) {
  return grades.map((n) => {
    let round = 5 - (n % 5);

    if (round < 3 && n >= 38) {
      n += round;
    }
    return n;
  });
}

// Given a time in -hour AM/PM format, convert it to military (24-hour) time:

function timeConversion(s) {
  let letters = s.slice(-2);

  let time = s.slice(0, -2).split(":");

  if (letters === "AM" && time[0] === "12") {
    // catching edge-case of 12AM
    time[0] = "00";
  } else if (letters === "PM") {
    // everything with PM can just be mod'd and added with 12 - the max will be 23
    time[0] = (time[0] % 12) + 12;
  }
  return time.join(":");
}

// Lonely | Given an array of integers, find the unique element.

function lonelyinteger(a) {
  let unique = [];

  for (let i = 0; i < a.length; i++) {
    if (a.indexOf(a[i]) === a.lastIndexOf(a[i])) {
      unique.push(a[i]);
    }
  }

  return unique;
}

// Mars exploration:

function marsExploration(s) {
  let message = s.split("");
  let count = 0;

  for (let i = 1; i <= message.length; i++) {
    if (i % 3 == 0) {
      /// si el indice esta por los tres caracteres comparamos:
      if (message[i - 3] != "S") count++;
      if (message[i - 2] != "O") count++;
      if (message[i - 1] != "S") count++;
    }
  }
  return count;
}

// another:

function marsExploration(s) {
  let count = 0;

  for (let i = 0; i < s.length; i += 3) {
    let sos = s.slice(i, i + 3);
    if (sos == s) continue;
    if (sos[0] !== s[0]) count++;
    if (sos[1] !== s[1]) count++;
    if (sos[2] !== s[2]) count++;
  }
  return count;
}

// RECURSION / Super Digit

function superDigit(n, k) {
  let concat = "";
  for (let i = 0; i < k; i++) {
    concat += n;
  }
  console.log(concat);

  // let super_digit = (s) => {
  //   if (s.length > 3) return s;
  //   s += s;
  //   return super_digit(s);
  // };
  // let ret = super_digit("h");

  // console.log("Recursive");
  // console.log(ret);

  let super_digit = (concat) => {
    let result = 0;
    concat.split("");
    for (let i = 0; i < concat.length; i++) {
      console.log(+concat[i]);
      result += parseInt(concat[i]);
      console.log(result, concat[i]);
    }
    return result;
  };

  let sum = parseInt(concat);

  while (sum > 10) {
    sum = super_digit(sum.toString());
  }

  console.log("Sum final: ", sum);
  return sum;
}

//superDigit("9875", 4);
