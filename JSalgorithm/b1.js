// 1. Your task is to make function (min and max) that receive a list of integers as input.
//    Return, respectively, the largest and lowest number in that list, array => [min, max].

// ```

// Input: [-52, 56, 30, 29, -54, 0, -110]
// Output: [-110, 56]
// ```

// ```
// Input: [42, 54, 65, 87, 0]
// Output: [0, 65]
// ```

// ```
// Input: [5]
// Output: [5, 5]
// ```
array = [5
];
console.log(`[${Math.min(...array)},${Math.max(...array)}]`);