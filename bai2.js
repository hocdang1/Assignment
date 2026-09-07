// 2. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.

// ```
// Input: a = 12
// Output: 7
// ```
// ```
// Input: a = 19
// Output: 0
// ```
// ```
// Input: a = 22
// Output: 9
// ```

function absoluteDifference(num) {
  const difference = Math.abs(num - 19);
  if (num > 19) {
    return difference * 3;
  } else {
    return difference;
  }
}

console.log(absoluteDifference(12)); // Output: 7
console.log(absoluteDifference(19)); // Output: 0
console.log(absoluteDifference(22)); // Output: 9