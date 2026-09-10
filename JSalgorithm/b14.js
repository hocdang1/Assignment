// 14. Find the number that differs between two array numbers.

// ```
// Input: [1,1,2,3], [2]
// Output: [1,3]
// ```

// ```
// Input: [2,3], [2]
// Output: [3]

// Computing the difference or intersection between sets can also be helpful. I used this the other day to determine what remaining items I had to find in a computation.

// // intersect can be simulated via 
// let intersection = new Set([...set1].filter(x => set2.has(x)))

// // difference can be simulated via
// let difference = new Set([...set1].filter(x => !set2.has(x)))
function findDifference(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    const difference = [...set1].filter(x => !set2.has(x));
    return difference;
}

console.log(findDifference([1, 1, 2, 3], [2])); 
console.log(findDifference([2, 3], [2]));