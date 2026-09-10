# JS algorithm

## Exercise

1. Your task is to make function (min and max) that receive a list of integers as input.
   Return, respectively, the largest and lowest number in that list, array => [min, max].

```

Input: [-52, 56, 30, 29, -54, 0, -110]
Output: [-110, 56]
```

```
Input: [42, 54, 65, 87, 0]
Output: [0, 65]
```

```
Input: [5]
Output: [5, 5]
```

2. Sum of two array elements

```
Input: [1, 2, 3], [4, 5, 6]
Output: 21
```

```
Input: [0, 0, 0], [4, 5, 6]
Output: 15
```

3. Your task is take the num parameter being passed and return the factorial of it.

```
Input: 3
Output: 3 * 2 * 1 = 6
```

```
Input: 4
Output: 4 * 3 * 2 * 1 = 24
```

```
Input: 8
Output: 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1 = 40320
```

4. Your task is take the str parameter being passed and return the string in reversed order.

```
Input: "Hello World and Coders"
Output: "sredoC dna dlroW olleH"
```

```
Input: "I Love Code"
Output: "edoC evoL I"
```

5. Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order.
   Essentially, rearrange the digits to create the highest possible number.

```
Input: 42145
Output: 54421
```

```
Input: 145263
Output: 654321
```

```
Input: 123456789
Output: 987654321
```

6. You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item. Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

```
likes([]) => "no one likes this"
likes(["Peter"]) => "Peter likes this"
likes(["Jacob", "Alex"]) => "Jacob and Alex like this"
likes(["Max", "John", "Mark"]) => "Max, John and Mark like this"
likes(["Alex", "Jacob", "Mark", "Max"]) => "Alex, Jacob and 2 others like this"
```

7. Write a function that when given a number >= 0, returns an Array of ascending length sub-arrays.

```
pyramid(0) => [ ]
pyramid(1) => [ [1] ]
pyramid(2) => [ [1], [1, 1] ]
pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
```

Note: the sub-arrays should be filled with 1s

8. Finish the solution so that it takes an input n (integer) and returns a string that is the decimal representation of the number grouped by commas after every 3 digits.

Assume: 0 <= n < 2147483647

Example

```
1 => "1"
10 => "10"
100 => "100"
1000 => "1,000"
10000 => "10,000"
100000 => "100,000"
1000000 => "1,000,000"
35235235 => "35,235,235"
```

9. Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result. Numbers can be from 1 to 9. So 1 will be the first word (not 0). If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

```
Input: "is2 Thi1s T4est 3a"
Output: "Thi1s is2 3a T4est"
```

```
Input: "4of Fo1r pe6ople g3ood th5e the2"
Output: "Fo1r the2 g3ood 4of th5e pe6ople"
```

```
Input: ""
Output: ""
```

10. You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

```
Input: [2, 4, 0, 100, 4, 11, 2602, 36]
Output: 11 (the only odd number)
```

```
Input: [160, 3, 1719, 19, 11, 13, -21]
Output: 160 (the only even number)
```

11. Your job is to write a function which increments a string, to create a new string. If the string already ends with a number, the number should be incremented by 1. If the string does not end with a number. the number 1 should be appended to the new string.

Example

```
foo -> foo1
foobar23 -> foobar24
foo0042 -> foo0043
foo9 -> foo10
foo099 -> foo100
```

Attention: If the number has leading zeros the amount of digits should be considered.

12. Digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples

```
16 --> 1 + 6 = 7
942 --> 9 + 4 + 2 = 15 --> 1 + 5 = 6
132189 --> 1 + 3 + 2 + 1 + 8 + 9 = 24 --> 2 + 4 = 6
493193 --> 4 + 9 + 3 + 1 + 9 + 3 = 29 --> 2 + 9 = 11 --> 1 + 1 = 2
```

13. Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples

```
"()" => true
")(()))" => false
"(" => false
"(())((()())())" => true
```

14. Find the number that differs between two array numbers.

```
Input: [1,1,2,3], [2]
Output: [1,3]
```

```
Input: [2,3], [2]
Output: [3]
```

15. Given an array of numbers, sort the odd numbers in ascending order while keeping the even numbers in their original positions.

```
Input: [7, 1]
Output: [1, 7]
```

```
Input: [5, 8, 6, 3, 4]
Output: [3, 8, 6, 5, 4]
```

```
Input: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
Output: [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
```

16. 

```
Input: abcd
Output: A-Bb-Ccc-Dddd
```

```
Input: RqaEzty
Output: R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy
```

```
Input: cwAt
Output: C-Ww-Aaa-Tttt
```

17. Calculate the sum of the n-th row of the triangle constructed from odd numbers.

```
Input: 1
Output: 1
```

```
Input: 2
Output: 8 (3 + 5)
```

```
Input: 3
Output: 27 (7 + 9 + 11)
```
