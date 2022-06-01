///If:

let numeroIf = x;
let positive = 0;
let negative = 0;

if (x > 0) {
  positive++;
} else if (x < 0) {
  negative++;
}

///While:

let numeroWhile = x;

while (x < 3) {
  numeroWhile += 1;
  console.log(numeroWhile);
}

///Do While:

do {
  numeroWhile += 1;
  console.log(numeroWhile);
} while (x < 3);

///For:

let numeroFor = 0;

for (let i = 0; i <= 3; i++) {
  numeroFor++;
  console.log(numeroFor);
}

//Switch:
let estacion = "";

switch (estacion) {
  case "verano":
    console.log("es verano");
    break;
  case "primavera":
    console.log("es primavera");
    break;
  case "invierno":
    console.log("es invierno");
    break;
  case "otoño":
    console.log("es otoño");
    break;
  default:
    console.log("no es una estacion");
}
