
# Javascript Exercise

## Knowledge round-up

- What are the differences between a variable that is: `null`, `undefined`?
null là được tạo và xác định rõ là không có giá trị 
underfined là biến chưa được gán giá trị hoặc chưa tạo ra
- What is `use strict`? what are the advantages and disadvantages to using it?
"use strict" là một directive trong JavaScript, dùng để bật Strict Mode — chế độ giúp JavaScript kiểm tra code nghiêm ngặt hơn và tránh một số lỗi phổ biến.
. Ưu điểm
- Giúp phát hiện lỗi sớm.
- Không cho phép một số cách viết code dễ gây lỗi.
- Tránh vô tình tạo global variable.
- Làm JavaScript an toàn và dễ bảo trì hơn.
-Giúp code hoạt động rõ ràng, nhất quán hơn.
. Nhược điểm
-Một số code JavaScript cũ có thể không chạy được khi bật strict mode.
-Có thể gây ra lỗi ở những đoạn code trước đây JavaScript cho phép nhưng strict mode không cho phép.

- What are the differences between `==` and `===`? Write an example for each case (if any)?
== là so sánh 2 giá trị sau khi đã đổi về cùng 1 kiểu dữ liệu
=== là so sánh giá trị lẫn kiểu dữ liệu của 2 giá trị

example:
 "==" :
x = 5 
x == 10 : false;
x == 5 : true;
x == '5': true;
"===" :
x = 6;
x === 6: true;
x === 6: 'false';
- Give a list of `Falsy` values in Javascript.
false
0
-0
0n
""
null
undefined
NaN
- Give an example for each of the following methods in Javascript
  - map
 const users = [
  { name: "An", age: 20 },
  { name: "Bình", age: 22 },
  { name: "Nam", age: 21 }
];
const names = users.map((user) => user.name);
console.log(names);
// ["An", "Bình", "Nam"]
 
 
 
  - filter: 
  const users = [
  { name: "An", age: 17 },
  { name: "Bình", age: 22 },
  { name: "Nam", age: 25 }
];

const adults = users.filter((user) => user.age >= 18);

console.log(adults);
// [
//   { name: "Bình", age: 22 },
//   { name: "Nam", age: 25 }
// ]
  - reduce
  const number = [1,2,3,4,5];
  const sum = number.reduce((total,num) =>{
    return total + num;
  },
  0); 
  console.log(sum);
  //15
  
  
  - find:
  const number = [1,2,3,4,5];
  const result = number.find((num)=>{
    return num >3;
  });
  console.log(result);
 
 
  - some:
    const number =[6,8,10,12,14];
    const result = number.some((num)=>{
        return num >11;
    })
    console.log(result);

- Give an example for add a new element to an array[] (at the end)
const array = [2,3,4,5,6];
Array.push(7);
console.log(array);

- Give an example for add a new element to an array[] (at the beginning)
const array = [2,3,4,5,6];
Array.unshift(1);
console.log(array);

- Give an example for removing an element in array[]
const array = [1,2,3,4];
array.pop(1);
## Playground

1. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.

```
Input: a = 5, b = 10
Output: 15
```
```
Input: a = 5, b = 5
Output: 30
```

2. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.

```
Input: a = 12
Output: 7
```
```
Input: a = 19
Output: 0
```
```
Input: a = 22
Output: 9
```

3. A masked number is a string that consists of digits and one asterisk (*) that should be replaced by exactly one digit. Given a masked number find all the possible options to replace the asterisk with a digit to produce an integer divisible by 3.

```
Input: a = '1*9'
Output: ['129', '159', '189']
```
```
Input: a = '1234567890*'
Output: ['12345678900', '12345678903', '12345678906', '12345678909']
```

4. A masked number is a string that consists of digits and one asterisk (*) that should be replaced by exactly one digit. Given a masked number find all the possible options to replace the asterisk with a digit to produce an integer divisible by 6.

```
Input: a = '1*9'
Output: []
```
```
Input: a = '1234567890*'
Output: ['12345678900', '12345678906']
```