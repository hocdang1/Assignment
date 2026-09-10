// 13. Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples

// ```
// "()" => true
// ")(()))" => false
// "(" => false
// "(())((()())())" => true
// ```

function validParentheses(parens) {
  let count = 0;
  
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === '(') {
      count++;
    } else if (parens[i] === ')') {
      count--;
    }
    
    // If count drops below zero, a closing parenthesis came first
    if (count < 0) {
      return false;
    }
  }
  
  // If count is zero, all opened parentheses were closed
  return count === 0;
}

// Example usage:
console.log(validParentheses("()")); // Output: true
console.log(validParentheses(")(()))")); // Output: false
console.log(validParentheses("(")); // Output: false
console.log(validParentheses("(())((()())())")); // Output: true