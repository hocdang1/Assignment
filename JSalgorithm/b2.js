// 2. Sum of two array elements

// ```
// Input: [1, 2, 3], [4, 5, 6]
// Output: 21
// ```

// ```
// Input: [0, 0, 0], [4, 5, 6]
// Output: 15


array1 = [0,0,0];
array2 = [0,4,5,6];
// sum1 =array1.reduce((accumulator, currentValue, index) => accumulator + currentValue , 0);
// sum2 =array2.reduce((accumulator, currentValue, index) => accumulator + currentValue , 0);
// sum = sum1 + sum2;
array3 = array1.concat(array2)
sum =array3.reduce((accumulator, currentValue, index) => accumulator + currentValue , 0);

console.log(sum); // Output: 21