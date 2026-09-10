// 4. Your task is take the str parameter being passed and return the string in reversed order.

// ```
// Input: "Hello World and Coders"
// Output: "sredoC dna dlroW olleH"
// ```

// ```
// Input: "I Love Code"
// Output: "edoC evoL I"
// ```

function reverseString(str) {
   return  str.split('').reverse().join('');
}

console.log(reverseString("Hello World and Coders")); 