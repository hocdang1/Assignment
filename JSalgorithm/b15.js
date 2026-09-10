
// 15. Given an array of numbers, sort the odd numbers in ascending order while keeping the even numbers in their original positions.

// ```
// Input: [7, 1]
// Output: [1, 7]
// ```

// ```
// Input: [5, 8, 6, 3, 4]
// Output: [3, 8, 6, 5, 4]
// ```

// ```
// Input: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
// Output: [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// ```
function sortArray(array) {
  
  const oddNumbers = array.filter(num => num % 2 !== 0).sort((a, b) => a - b);
 
  let result = [];
  

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      
      result.push(array[i]);
    } else {
    
      result.push(oddNumbers.shift());
    }
  }
  
  return result;
}


console.log(sortArray([7, 1])); // Output: [1, 7]
console.log(sortArray([5, 8, 6, 3, 4])); // Output: [3, 8, 6, 5, 4]
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])); // Output: [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
    