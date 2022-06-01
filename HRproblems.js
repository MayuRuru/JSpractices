// Flip the matrix

function flippingMatrix(matrix) {
  let x = matrix.length / 2; //find dimensions of the top left submatrix

  let max = 0; //check maximum possible for each element of the submatrix

  let total = 0; //result

  for (let i = 0; i < x; i++) {
    for (let j = 0; j < x; j++) {
      max = Number.MIN_VALUE;
      max = Math.max(matrix[i][j], max);
      max = Math.max(matrix[i][2 * x - j - 1], max);
      max = Math.max(matrix[2 * x - i - 1][j], max);
      max = Math.max(matrix[2 * x - i - 1][2 * x - j - 1], max);

      total += max;
    }
  }

  return total;
}

// CAESE CHYPHER

function caesarCipher(s, k) {
  s = s.split("");
  k = k > 25 ? k % 26 : k;
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  alphabet = alphabet.slice(k) + alphabet.slice(0, k);
  for (let i = 0; i < s.length; i++) {
    if (/[a-zA-Z]/.test(s[i])) {
      let index = s[i].charCodeAt(0) - 97;
      if (index < 0) {
        index = s[i].charCodeAt(0) - 65;
        s[i] = alphabet[index].toUpperCase();
      } else {
        s[i] = alphabet[index];
      }
    }
  }
  return s.join("");
}

// TOWER BREAKERS

function towerBreakers(n, m) {
  //player 2 wins in the following cases:

  if (m == 1) return 2; //if the towers start out at 1
  if (n % 2 == 0) return 2;
  //or there are an even number of towers
  else return 1;
}

// GRID CHALLENGE

function gridChallenge(grid) {
  let matrix = [];
  let isSorted = true;

  grid.forEach((row, i) => {
    matrix[i] = row.split("").sort((a, b) => a.localeCompare(b));
  });

  for (let i = 0; i < matrix[0].length; ++i) {
    let tmpArr = [];

    for (let j = 0; j < matrix.length; ++j) {
      tmpArr.push(matrix[j][i]);
    }

    for (let k = 0; k < tmpArr.length; ++k) {
      if (tmpArr[k] > tmpArr[k + 1]) {
        isSorted = false;
        break;
      }
    }
  }
  return isSorted ? "YES" : "NO";
}

// NEW YEAR CHAOS

function minimumBribes(q) {
  let bribes = 0;
  let chaotic = false;

  for (let i = q.length - 1; i >= 0; i--) {
    //Outer loop will start from the last element
    if (q[i] - i > 3) chaotic = true;

    for (let j = q[i] - 2; j < i; j++) {
      //Inner loop (only two steps forward) will compare our current element with elements that are in front of it
      if (q[j] > q[i]) bribes++;
      //compare positions and for every number bigger that finds increases the bribe
      //iteration will start one position in front of the current element’s original position and end one position before current element’s position.
    }
  }
  if (chaotic) console.log("Too chaotic");
  else console.log(bribes);
}

// PALINDROME INDEX

function palindrome(s) {
  let result = -1;

  if (s !== s.split("").reverse().join("")) {
    for (let i = 0; i < s.length; i++) {
      //create new string with the character at index i
      let newString = s.substring(0, i) + s.substring(i + 1);

      //create its reverse:
      let reverseString = newString.split("").reverse().join("");

      //compare:
      if (newString === reverseString) {
        result = i;
        break;
      }
    }
  }

  return result;
}

/// Return an array of integers representing the frequency of occurrence of each query string in strings.

function matchingStrings(strings, queries) {
  let result = [];

  for (let i = 0; i < queries.length; i++) {
    result[i] = strings.filter((element) => element == queries[i]).length;
  }
  return result;
}

// say what:

function matchingStrings(strings, queries) {
  let occurs = []; //storing object
  let result = Array(queries.length); //result will be an array of the same size of

  strings.forEach((string) => {
    //iterate over every item in strings array
    if (occurs[string]) {
      occurs[string]++; //increment its repetition in the occurs object
    } else {
      occurs[string] = 1;
    }
  });

  queries.forEach((q, index) => {
    //iterate over the queries array
    if (occurs[q]) {
      //check their values in the occurs object
      result[index] = occurs[q]; //add number of repetitions to result
    } else {
      result[index] = 0; //query not added to result
    }
  });
  return result;
}

///

function kangaroo(x1, v1, x2, v2) {
  if (v1 > v2) {
    while (x1 < x2) {
      x1 += v1;
      x2 += v2;
    }
  }
  if (x1 == x2) {
    return "YES";
  } else return "NO";

  // let kangaroo1 = x1;
  // let kangaroo2 = x2;

  // if(x2>=x1 && v2>=v1){
  //     return "NO";
  // }

  // for (let i=1; i<100; i++){
  //     kangaroo1 += v1;
  //     kangaroo2 += v2;

  //     if (kangaroo1 === kangaroo2){
  //         return "YES";
  //     }
  //     return "NO";
  // }
}

// cats and mouse

function catAndMouse(x, y, z) {
  let cata = Math.abs(z - x);
  let catb = Math.abs(z - y);

  if (cata > catb) {
    return "Cat B";
  } else if (cata > catb) {
    return "Cat A";
  } else if (cata == catb) {
    //1 3 2 // 1     -1
    return "Mouse C";
  }
}

// EVERY
// INCLUDES
// array of strings check if character is repeated in all of strings

function gemstones(arr) {
  let gemstones = 0;
  let newarr = [...new Set(...arr)];

  for (let i of newarr) {
    if (arr.every((letter) => letter.includes(i))) {
      gemstones++;
    }
  }
  return gemstones;
}

//

function beautifulBinaryString(b) {
  let pattern = /010/g;
  let matches = b.match(pattern);

  if (matches !== null) {
    return matches.length;
  } else {
    return 0;
  }
}

// counting sort | Given a list of integers, count and return the number of times each value appears as an array of integers.
/*
countingSort has the following parameter(s):

    arr[n]: an array of integers

Returns

    int[100]: a frequency array with the values at each index associated with the frequency the value occurred in the original array

*/

function countingSort(arr) {
  //create a new array with the same amount of indices as the array being passed into the function:
  let arrSort = new Array(100).fill(0);
  //“fill” must be included otherwise the values at each of the indices remain undefined, and the array would remain empty.

  for (let num of arr) {
    arrSort[num]++;
  }

  // iterate over the original array that the function is accepting and increment the number at the associated index of by 1

  return arrSort;
}

// Breaking the records:

function breakingRecords(scores) {
  let min = scores[0];
  let max = scores[0];
  let most = 0;
  let least = 0;

  for (let i = 1; i < scores.length; i++) {
    //console.log(scores[i]);
    if (scores[i] < min) {
      min = scores[i];
      least++;
    }
    if (scores[i] > max) {
      max = scores[i];
      most++;
    }
  }

  return [most, least];
}

//Super reduced string:

function superReducedString(s) {
  let string = s.split("");
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1]) {
      string.splice(i, 2);
      i = -1;
    }
  }
  return string.length === 0 ? "Empty String" : string.join("");
}
