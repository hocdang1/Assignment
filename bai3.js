// 3. A masked number is a string that consists of digits and one asterisk (*) that should be replaced by exactly one digit. Given a masked number find all the possible options to replace the asterisk with a digit to produce an integer divisible by 3.

// ```
// Input: a = '1*9'
// Output: ['129', '159', '189']
// ```
// ```
// Input: a = '1234567890*'
// Output: ['12345678900', '12345678903', '12345678906', '12345678909']
// ```
function findNumberDivisibleByThree(num) {
    const options = [];
    for(let i = 0; i <= 9; i++) {
        const replacedNum =num.replace('*', i);
        if((replacedNum) % 3 === 0) {
            options.push(replacedNum);
        }
    }
    return options;
}

console.log(findNumberDivisibleByThree('1*9')); // Output: ['129', '159', '189']
console.log(findNumberDivisibleByThree('1234567890*')); // Output: ['12345678900', '12345678903', '12345678906', '12345678909']