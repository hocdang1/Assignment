# Javascript ES6 Exercise

## Convert the code below from ES5 to ES6 and answer the question

1. Define a variable

- ES5

```js
var MAX_SIZE = 25 * 1024 * 1024;
var title = "Hello World";
title = "Hello ES6";
```
- ES6
```js
const MAX_SIZE = 25 * 1024 * 1024;
let title = "Hello World";
title = "Hello ES6";
```

- Question: Let and Const – What's the Difference?
  .let tạo một biến không thể được khai báo nhiều hơn một lần trong cùng một phạm vi và có thể được cập nhật trong phạm vi của nó.

const :giá trị của một biến được khai báo bằng từ const sẽ giữ nguyên trong phạm vi của nó. Nó không thể được cập nhật hoặc khai báo lại

2. String Interpolation

- ES5

```js
var user = { name: "David" };
var card = { amount: 7, product: "Bar", unitprice: 42 };
var message =
  "Hello " +
  user.name +
  ",\n" +
  "want to buy " +
  card.amount +
  " " +
  card.product +
  " for\n" +
  "a total of " +
  card.amount * card.unitprice +
  " bucks?";
```

---

const user = { name: "David" };
const card = { amount: 7, product: "Bar", unitprice: 42 };

let message = `Hello ${user.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`;

3. Rest Parameter

- ES5

```js
function foo(x, y) {

  var a = Array.prototype.slice.call(arguments, 2);// lấy các phần tử từ vị trí thứ 2 trở đi -> foo(1, 2, "hello", true, 7) === 9 là lấy ("hello", true, 7); a.length = 3
  return (x + y) * a.length;
}
foo(1, 2, "hello", true, 7) === 9; // (x + y) * a.length = (1+2)* 3 = 9 => true
```

-ES6
function foo(x, y, ...a) {
  return (x + y) * a.length;
}

foo(1, 2, "hello", true, 7) === 9;


4. Default Parameter Values

- ES5

```js
function sum(x, y, z) {
  if (y === undefined) {
    y = 7;
  }// nếu y chưa xác định thì mặc định y = 7
  if (z === undefined) {
    z = 42;
  }// nếu z chưa xác định thì mặc định z = 42
  return x + y + z;
}
console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(1, 2)); // Output: 49
console.log(sum(1)); // Output: 50
```
-----------
ES6
function sum(x, y = 7, z = 42) {
  return x + y + z;
}

5. Arrow Functions
 một giải pháp thay thế ngắn gọn cho biểu thức hàm truyền thống trong JavaScript. 
 mang lại cú pháp gọn gàng hơn và có những điểm khác biệt rõ rệt về mặt ngữ nghĩa so với hàm thông thường, đặc biệt là ở cách thức xử lý từ khóa `this`.

- ES5

```js
var evens = [1, 2, 3, 4, 5, 6];
var odds = evens.map(function (v) {
  return v + 1;
});//trả về mỗi giá trị của hàm evens + 1
var pairs = evens.map(function (v) {
  return { even: v, odd: v + 1 };
});
var nums = evens.map(function (v, i) {
  return v + i;
});
var fives = [];
nums.forEach(function (v) {
  if (v % 5 === 0) {
    fives.push(v);
  }
});

---
ES6
const evens = [1, 2, 3, 4, 5, 6];
const odds = evens.map(v => v + 1);
const pairs = evens.map(v => { even: v, odd: v + 1 });
const nums = evens.map((v,i)=> v + i);
nums.forEach(v =>{
   if (v % 5 === 0) {
    fives.push(v);
  }
});

console.log(odds); // [2, 3, 4, 5, 6, 7]
console.log(pairs); // [{even: 1, odd: 2}, {even: 2, odd: 3}, ...]
console.log(nums); // [1, 3, 5, 7, 9, 11]
console.log(fives); // [5]

6. Classes

- ES5

```js
var Shape = function (id, x, y) {
  this.id = id;
  this.move(x, y);
};
Shape.prototype.move = function (x, y) {
  this.x = x;
  this.y = y;
};
````

Es6
class Shape{ 
  constructor(id, x, y) {
  this.id = id;
  this.move(x, y);
}

move(x,y) {
  this.x = x;
  this.y = y;
}
}

7. Modules

- ES5

```js
// lib/utils.js
Utils = {};
Utils.sum = function (x, y) {
  return x + y;
};
Utils.pi = 3.141593;

// someApp.js
var math = Utils;
console.log("2π = " + math.sum(math.pi, math.pi));

// otherApp.js
var sum = Utils.sum,
  pi = Utils.pi;
console.log("2π = " + sum(pi, pi));
```


8. Promise

- ES5

```js
function showMessAfterTimeout(msg, who, timeout, onDone) {
  setTimeout(function () {
    onDone(msg + " Hi " + who + "!");
  }, timeout);
}
showMessAfterTimeout("", "Foo", 100, function (msg) {
  showMessAfterTimeout(msg, "Bar", 200, function (msg) {
    console.log("Finish after 300ms:" + msg);
  });
});


ES6
function showMessAfterTimeout(msg, who, timeout) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(msg + " Hi " + who + "!");
    }, timeout);
  });
}
async function main() {
  let msg = await showMessAfterTimeout("", "Foo", 100);
  msg = await showMessAfterTimeout(msg, "Bar", 200);
  console.log("Finish after 300ms:" + msg);
}

main();
9. Loops
- Give an example for each method:
  - for…of
1. const array = ["a", "b", "c"];

for (const element of array) {
  console.log(element);
}

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"
2. array = [0,1,2,3,4];
for(let i of array){
  a = i + 1;
  console.log(a); 
}

  - findIndex()
  const array = [0,1, 2, 3, 4,5,6];
const num = x => x>5;
console.log(array.findIndex(num));
