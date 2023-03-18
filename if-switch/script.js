//05) Coding-Task: If & switch statements
//-----------------------------------------------//
//01) Spot the errors and fix them//
/*
console.log("01) Spot the errors and fix them");

const size = 25;
let result;

if (size > 20) {
  result = "Greater than 20";
} else if (size > 10) {
  result = "Greater than 10";
} else {
  result = "Lower than 10";
}

console.log(result);
// Returns Greater than 10 but should return Greater than 20

//01) oddEven function//   */

console.log("02) oddEven function");

function oddEven(value) {
  //value = 4;

  if (Math.abs(value) === 1) {
    console.log("oddEven is odd");
  } else if (value === 2) {
    console.log("oddEven is even");
  } else if (value === 3) {
    console.log("oddEven is odd");
  } else if (value === 4) {
    console.log("oddEven is even");
  } else if (value === 5) {
    console.log("oddEven is odd");
  } else if (value === 6) {
    console.log("oddEven is even");
  } else if (value === 7) {
    console.log("oddEven is odd");
  } else if (value === 8) {
    console.log("oddEven is even");
  } else if (value === 9) {
    console.log("oddEven is odd");
  } else if (value === 10) {
    console.log("oddEven is even");
  }
}

console.log(oddEven(4));
// result should be even

console.log(oddEven(3));
// result should be odd

console.log(oddEven(-1));
// result should be odd

console.log(oddEven(10));
// result should be even
