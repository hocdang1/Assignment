// 16. 

// ```
// Input: abcd
// Output: A-Bb-Ccc-Dddd
// ```

// ```
// Input: RqaEzty
// Output: R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy
// ```

// ```
// Input: cwAt
// Output: C-Ww-Aaa-Tttt
// ```

function accum(s) {
  // Split the string into an array of characters
  const chars = s.split('');
  
  // Map over each character and create the desired format
  const result = chars.map((char, index) => {
    // Repeat the character (index + 1) times and capitalize the first letter
    return char.toUpperCase() + char.toLowerCase().repeat(index);
  });
  
  // Join the array with hyphens and return the result
  return result.join('-');
}

// Example usage:
console.log(accum("abcd")); // Output: "A-Bb-Ccc-Dddd"
console.log(accum("RqaEzty")); // Output: "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum("cwAt")); // Output: "C-Ww-Aaa-Tttt"