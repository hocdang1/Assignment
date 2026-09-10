// function foo(x, y) {
//   let a = Array.prototype.slice.call(arguments, 2);
//   return (x + y) * a.length;
// }
// console.log(foo(1, 2, "hello", true, 7) === 9); => true


// function sum(x, y, z) {
//   if (y === undefined) {
//     y = 7;
//   }
//   if (z === undefined) {
//     z = 42;
//   }
//   return x + y + z;
// }
// console.log(sum(1, 2, 3)); // Output: 6
// console.log(sum(1, 2)); // Output: 49
// console.log(sum(1)); // Output: 50
// var evens = [1, 2, 3, 4, 5, 6];
// var odds = evens.map(function (v) {
//   return v + 1;
// });
// var pairs = evens.map(function (v) {
//   return { even: v, odd: v + 1 };
// });
// var nums = evens.map(function (v, i) {
//   return v + i;
// });
// var fives = [];
// nums.forEach(function (v) {
//   if (v % 5 === 0) {
//     fives.push(v);
//   }
// });
// console.log(odds); // [2, 3, 4, 5, 6, 7]
// console.log(pairs); // [{even: 1, odd: 2}, {even: 2, odd: 3}, ...]
// console.log(nums); // [1, 3, 5, 7, 9, 11]
// console.log(fives); // [5]
// const user = { name: "David" };
// const card = { amount: 7, product: "Bar", unitprice: 42 };

// let message = `Hello ${user.name},
// want to buy ${card.amount} ${card.product} for
// a total of ${card.amount * card.unitprice} bucks?`;
// function foo(x, y) {

//   var a = Array.prototype.slice.call(arguments, 2);// lấy các phần tử từ vị trí thứ 2 trở đi -> foo(1, 2, "hello", true, 7) === 9 là lấy ("hello", true, 7); a.length = 3
//   return (x + y) * a.length;
// }
// foo(1, 2, "hello", true, 7) === 9; // (x + y) * a.length = (1+2)* 3 = 9 => true

// function foo(x, y, ...a) {
//   return (x + y) * a.length;
// }

// console.log(foo(1, 2, "hello", true, 7) === 9);
// const evens = [1, 2, 3, 4, 5, 6];
// const odds = evens.map(v => v + 1);
// const pairs = evens.map(v => ({ even: v, odd : v + 1 }));
// const nums = evens.map((v,i)=> v + i);
// const fives = [];
// nums.forEach(v => {
//    if (v % 5 === 0) {
//     fives.push(v);
//   }
// });



// console.log(odds); // [2, 3, 4, 5, 6, 7]
// console.log(pairs); // [{even: 1, odd: 2}, {even: 2, odd: 3}, ...]
// console.log(nums); // [1, 3, 5, 7, 9, 11]
// console.log(fives); // [5]
// Source - https://stackoverflow.com/q/55235969
// Posted by Detroit
// Retrieved 2026-09-08, License - CC BY-SA 4.0

// class Shape {
//   constructor (id, x, y) {
//     this.id = id
//     this.move(x, y)
//   }
//   move (x, y) {
//     this.x = x
//     this.y = y
//   }
// }
// console.log(Shape.prototype.constructor === Shape) // true
// function showMessAfterTimeout(msg, who, timeout, onDone) {
//   setTimeout(function () {
//     onDone(msg + " Hi " + who + "!");
//   }, timeout);
// }
// showMessAfterTimeout("", "Foo", 100, function (msg) {
//   showMessAfterTimeout(msg, "Bar", 200, function (msg) {
//     console.log("Finish after 300ms:" + msg);
//   });
// });

// const array = [0,1, 2, 3, 4,5,6];
// const num = x => x>5;
// console.log(array.findIndex(num)); 
// array = [0,1,2,3,4];
// for(let i of array){
//   a = i + 1;
//   console.log(a); 
// }


// function showMessAfterTimeout(msg, who, timeout, onDone) {
//     async function wait(ms) {
//         return new Promise(resolve => setTimeout(resolve, ms));
//     }
//     wait(timeout).then(() => {
//         onDone(msg + " Hi " + who + "!");
//     });
// }
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

// function showMessAfterTimeout(msg, who, timeout, onDone) {
//   setTimeout(function () {
//     onDone(msg + " Hi " + who + "!");
//   }, timeout);
// }
// showMessAfterTimeout("", "Foo", 100, function (msg) {
//   showMessAfterTimeout(msg, "Bar", 200, function (msg) {
//     console.log("Finish after 300ms:" + msg);
//   });
// });
