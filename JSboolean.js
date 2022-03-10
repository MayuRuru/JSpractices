// JavaScript has three Boolean operators: && (and), || (or) and ! (not).

//&& links two Boolean values. If both values are true, the result is true. In all other cases it is false.

//With || the result is true, if at least one of the two input values is true. If both input values are false, the result is false.

//! is applied to a single Boolean value and inverts this value: !true is false and !false is true.

//Write a function nand that takes two Boolean values. If both values are true, the result should be false. In the other cases the return should be true:

function nand(bool1, bool2) {
  let x = bool1 && bool2;
  return !x;
}

//NAND gates are a standard component in digital electronics. Any Boolean function can be implemented by using a combination of NAND gates.

//another standard gate, the NOR (Not OR) gate | Write a function nor that takes two Boolean values. If both values are false, the result should be true. In the other cases the return should be false.

function nor(bool1, bool2) {
  let x = bool1 || bool2;
  return !x;
}
