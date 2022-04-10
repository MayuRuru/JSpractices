/*
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with places after the decimal.
*/

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

*/
