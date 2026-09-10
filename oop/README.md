# OOP

## Exercise

1. Define class and initialize object
-Class là một "khuôn mẫu" (blueprint) để tạo ra các object.

Ví dụ: ta có class Person mô tả một người.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

-Initialize object:
Dùng new để tạo object từ class:

const person1 = new Person("John", 20);
const person2 = new Person("Alice", 22);

console.log(person1.name); // John
console.log(person2.age);  // 22

person1.sayHello(); // Hello, I'm John

2. Define class as Abstraction
Abstraction = chỉ cho người dùng thấy những gì cần thiết, ẩn đi phần xử lý bên trong.

Ví dụ máy ATM:

Bạn chỉ cần:

Insert card
→ Enter PIN
→ Withdraw money

Bạn không cần biết bên trong ATM kết nối database, kiểm tra tài khoản như thế nào.
Abstraction tập trung vào: "Cần cho người dùng thấy cái gì?"

3. Define class use Encapsulation
Encapsulation = đóng gói data + methods vào trong class và kiểm soát việc truy cập data.

Ví dụ:

class BankAccount {
  #balance = 0;

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }

  getBalance() {
    return this.#balance;
  }
}
-Tại sao cần Encapsulation?

Nếu không encapsulate:

account.balance = -999999;

thì dữ liệu có thể bị thay đổi tùy ý.

Encapsulation giúp:

Data
 ↓
được bảo vệ
 ↓
chỉ thay đổi thông qua methods

 Encapsulation tập trung vào: "Ai được phép truy cập/thay đổi data?"
4. Define class use Inheritance and initialize object (parent class, child class)
Inheritance = class con kế thừa thuộc tính và method từ class cha.

Ví dụ:

class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating`);
  }
}

Đây là parent class.

Tạo child class:

class Dog extends Animal {
  bark() {
    console.log(`${this.name} says Woof!`);
  }
}

Dog kế thừa từ Animal.

Initialize object:

const dog = new Dog("Buddy");

dog.eat();  // Buddy is eating
dog.bark(); // Buddy says Woof!

Sơ đồ:

        Animal
       /      \
      /        \
    Dog        Cat

Dog có thể sử dụng:

eat() của Animal và có thêm bark() riêng của nó.

Nếu child có constructor
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
}

super(name) gọi constructor của parent.

const dog = new Dog("Buddy", "Husky");

console.log(dog.name);  // Buddy
console.log(dog.breed); // Husky


5. Define class use Polymorphism
Polymorphism = cùng một method nhưng các class khác nhau có cách thực hiện khác nhau.

Ví dụ:

class Animal {
  speak() {
    console.log("Animal makes a sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Woof!");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Meow!");
  }
}

Bây giờ:

const dog = new Dog();
const cat = new Cat();

dog.speak(); // Woof!
cat.speak(); // Meow!

Cả Dog và Cat đều có:

speak()

nhưng kết quả khác nhau.


6. Give some examples of
- Dependency — OrderService chỉ dùng Logger trong phạm vi một method, không lưu lại:

ts
class OrderService {
  process(order: Order, logger: Logger): void {
    logger.log(`Processing ${order.id}`);
  }
}

- Association — hai bên độc lập, chỉ tham chiếu nhau:

ts
class Doctor {
  private patients: Patient[] = [];
  addPatient(p: Patient) { this.patients.push(p); }
}
// Patient tồn tại độc lập, có thể khám nhiều Doctor khác nhau

- Aggregation — Department chứa Employee, nhưng xoá phòng ban thì nhân viên vẫn còn:

ts
class Department {
  constructor(public name: string, private members: Employee[]) {}
  // members được truyền từ bên ngoài vào → sống độc lập
}

const emp = new Employee("Hoc", 22, 1500);
const dept = new Department("Backend", [emp]); // emp vẫn tồn tại sau khi dept bị xoá

- Composition — House tạo ra Room, xoá nhà thì phòng cũng không còn:

ts
class Room {
  constructor(public name: string, public area: number) {}
}

class House {
  private rooms: Room[];
  constructor() {
    this.rooms = [           // House tự tạo Room bên trong
      new Room("Bedroom", 20),
      new Room("Kitchen", 12),
    ];
  }
}

- Implementation (realization) — class hiện thực hoá interface:

ts
interface Payable {
  pay(amount: number): void;
}

class MomoPayment implements Payable {
  pay(amount: number): void {
    console.log(`Paid ${amount} via Momo`);
  }
}
