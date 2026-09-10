// 3. Your task is take the num parameter being passed and return the factorial of it.

// ```
// Input: 3
// Output: 3 * 2 * 1 = 6
// ```

// ```
// Input: 4
// Output: 4 * 3 * 2 * 1 = 24
// ```

// ```
// Input: 8
// Output: 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1 = 40320
// ```

function factorial(num) {
    for (var i = num - 1; i >= 1; i--) {
        num *= i;
    }
    return num;
}

console.log(factorial(3)); // Output: 6
console.log(factorial(4)); // Output: 24
console.log(factorial(10)); // Output: 40320