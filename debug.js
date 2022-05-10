/*
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

superDigit("9875", 4);

//////////////////*/

const xMarksTheSpot = (input) => {
  console.log("inicial", input);
  let coordenates = [];

  if (input.length === 0) {
    return coordenates;
  }

  for (let i = 0; i < input.length; i++) {
    console.log("loop", i, coordenates);

    let index = input[i].indexOf("x");
    console.log("cajon numero", i, "contiene", input[i], "indice", index);

    console.log(coordenates.length);
    if (i === 0 && index === 0) {
      coordenates = [0, 0];
    } else if (index > -1) {
      if (coordenates.length !== 0) {
        return [];
      }
      coordenates = [i, index];
    }
  }

  return coordenates;

  // console.log("inicial", input);
  // let coordenates = [];

  // if (input.length === 0) {
  //   return coordenates;
  // }

  // for (let i = 0; i < input.length; i++) {
  //   console.log("loop", i, coordenates);

  //   let index = input[i].indexOf("x");
  //   console.log("cajon numero", i, "contiene", input[i], "indice", index);

  //   if (i === 0 && index === 0) {
  //     coordenates = [0, 0];
  //   } else if (index > -1) {
  //     if (coordenates.length !== 0) {
  //       return [];
  //     }
  //     coordenates = [i, index];
  //   }
  // }

  // return coordenates;
};

console.log(
  "result",
  xMarksTheSpot([
    ["x", "o"],
    ["0", "o"],
    ["0", "x"],
  ])
);
