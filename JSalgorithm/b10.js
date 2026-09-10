// 10. You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// ```
// Input: [2, 4, 0, 100, 4, 11, 2602, 36]
// Output: 11 (the only odd number)
// ```

// ```
// Input: [160, 3, 1719, 19, 11, 13, -21]
// Output: 160 (the only even number)
// ```
function findOutlier(integers) {
    const even = integers.filter(num => num % 2 === 0);
    const odd = integers.filter(num => num % 2 !== 0);
    return  even.length === 1 ? `${even[0]} is the only even number` : `${odd[0]} is the only odd number`;// lấy phần tử duy nhất trong mảng có độ dài bằng 1
}   
console.log(findOutlier([2, 3, 5, 100, 4, 11, 2602, 36])); // Output: 11 is the only odd number
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21])); // Output: 160 is the only even number