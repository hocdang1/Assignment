// 17. Calculate the sum of the n-th row of the triangle constructed from odd numbers.

// ```
// Input: 1
// Output: 1
// ```

// ```
// Input: 2
// Output: 8 (3 + 5)
// ```

// ```
// Input: 3
// Output: 27 (7 + 9 + 11)
// ```


function rowSumOddNumbers(n) {
    // Calculate the starting odd number for the n-th row
    const start = n * (n - 1) + 1;
    let sum = 0;
    
    // Sum the n odd numbers in the n-th row
    for (let i = 0; i < n; i++) {
        sum += start + (i * 2);
    }
    
    return sum;
}

// Example usage:
console.log(rowSumOddNumbers(1)); // Output: 1
console.log(rowSumOddNumbers(2)); // Output: 8
console.log(rowSumOddNumbers(3)); // Output: 27