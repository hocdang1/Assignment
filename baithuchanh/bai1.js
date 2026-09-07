// 1. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.

// ```
// Input: a = 5, b = 10
// Output: 15
// ```
// ```
// Input: a = 5, b = 5
// Output: 30
// ```
function sum(a,b) {
  if (a === b) {
    return 3 * (a + b);
  } else {
    return a + b;
  }
}
console.log(sum(5, 10)); // Output: 15
console.log(sum(5, 5)); // Output: 30
