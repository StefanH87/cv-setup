//05) Coding-Task: If & switch statements
//-----------------------------------------------//
//01) Spot the errors and fix them//

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

//01) oddEven function//

console.log("02) oddEven function");

let oddEven = 4;

if (oddEven === 1) {
  console.log("oddEven is odd");
} else if (oddEven === 2) {
  console.log("oddEven is even");
} else if (oddEven === 3) {
  console.log("oddEven is odd");
} else if (oddEven === 4) {
  console.log("oddEven is even");
} else if (oddEven === 5) {
  console.log("oddEven is odd");
} else if (oddEven === 6) {
  console.log("oddEven is even");
} else if (oddEven === 7) {
  console.log("oddEven is odd");
} else if (oddEven === 8) {
  console.log("oddEven is even");
} else if (oddEven === 9) {
  console.log("oddEven is odd");
} else if (oddEven === 10) {
  console.log("oddEven is even");
}

// TODO: Implement the oddEven function

console.log(oddEven(4));
// result should be even

console.log(oddEven(3));
// result should be odd

console.log(oddEven(-1));
// result should be odd

console.log(oddEven(10));
// result should be even
