// Boolean operators:

// (and) && links two Boolean values. If both values are true, the result is true. In all other cases it is false.

// (or) || the result is true if at least one of the two input values is true. If both input values are false, the result is false.

// (not) ! is applied to a single Boolean value and inverts this value: !true is false and !false is true.

//Write a function nand that takes two Boolean values. If both values are true, the result should be false. In the other cases the return should be true:

function nand(bool1, bool2) {
  let x = bool1 && bool2;
  return !x;
}

// NOR (Not OR) gate | Write a function that takes two Boolean values. If both values are false, the result should be true. In the other cases the return should be false.

function nor(bool1, bool2) {
  let x = bool1 || bool2;
  return !x;
}

// XOR (eXclusive OR) gate | Write a function xor that takes two Boolean values. If both values are different, the result should be true. If both values are the same, the result should be false.

// NAND gates are a standard component in digital electronics. Any Boolean function can be implemented by using a combination of NAND gates.
