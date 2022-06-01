// x marks the spot:

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
