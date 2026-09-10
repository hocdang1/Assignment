// 11. Your job is to write a function which increments a string, to create a new string. If the string already ends with a number, the number should be incremented by 1. If the string does not end with a number. the number 1 should be appended to the new string.

// Example

// ```
// foo -> foo1
// foobar23 -> foobar24
// foo0042 -> foo0043
// foo9 -> foo10
// foo099 -> foo100
// ```

// Attention: If the number has leading zeros the amount of digits should be considered.
function incrementString(str) {

  const match = str.match(/(\d*)$/);//lay o cuoi
  const numberPart = match[0];
  

  if (numberPart === '') {
    return str + '1';
  }
  
  // Increment the number part
  const incrementedNumber = (parseInt(numberPart, 10) + 1).toString();
  
  // Preserve leading zeros by calculating the difference in length
  const leadingZeros = numberPart.length - incrementedNumber.length;
  
  // Construct the new string with leading zeros if necessary
  return str.slice(0, -numberPart.length) + '0'.repeat(Math.max(0, leadingZeros)) + incrementedNumber;
}

// Example usage:
console.log(incrementString("foo")); // Output: "foo1"
console.log(incrementString("foobar23")); // Output: "