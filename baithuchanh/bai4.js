// 4. A masked number is a string that consists of digits and one asterisk (*) that should be replaced by exactly one digit. Given a masked number find all the possible options to replace the asterisk with a digit to produce an integer divisible by 6.

// ```
// Input: a = '1*9'
// Output: []
// ```
// ```
// Input: a = '1234567890*'
// Output: ['12345678900', '12345678906']
// ```
function markNumber(num) {
    options = [];
    for (let i = 0; i <= 9; i++) {
        const replacedNum = num.replace('*', i);
        if (replacedNum % 6 === 0) {
            options.push(replacedNum);
        }
    }

    return options;
} 
console.log(markNumber('1*9')); // Output: []
console.log(markNumber('1234567890*')); // Output: ['12345678900', '12345678906']
