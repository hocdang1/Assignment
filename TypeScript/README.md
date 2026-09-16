- What Is TypeScript?

TypeScript (TS) là ngôn ngữ do Microsoft phát triển, là superset của JavaScript: mọi code JS hợp lệ về cú pháp đều là code TS hợp lệ, TS chỉ thêm hệ thống kiểu (type system) lên trên.

Điểm cốt lõi cần nhớ:

TS không chạy trực tiếp. Trình biên dịch tsc (hoặc tool như esbuild, swc, tsx) sẽ xoá toàn bộ phần type và xuất ra JavaScript thuần. Quá trình này gọi là type erasure.
Type chỉ tồn tại lúc compile. Khi code chạy trên Node.js, không còn interface, không còn : string nào cả.
tsc làm 2 việc tách biệt: type-check (báo lỗi) và emit (sinh file .js). Mặc định, dù có lỗi type, tsc vẫn emit JS (trừ khi bật noEmitOnError).


- Why Do We Need TypeScript?
JavaScript là ngôn ngữ dynamic typing: biến có thể mang bất kỳ kiểu nào, lỗi chỉ lộ ra khi chạy.
Lợi ích	Giải thích
Bắt lỗi sớm	Lỗi: typo, sai kiểu, thiếu field, quên xử lý null bị phát hiện trước khi chạy.
Autocomplete / IntelliSense	Editor biết object có field gì → gợi ý chính xác, nhảy tới định nghĩa.
Refactor an toàn: Đổi tên field userId → ownerId, compiler chỉ ra mọi chỗ cần sửa.
Code tự tài liệu hoá:	Chữ ký hàm createUser(dto: CreateUserDto): Promise<User> nói lên hợp đồng (contract).
Làm việc nhóm:	Contract giữa các module/tầng (controller ↔ service ↔ repository) được compiler cưỡng chế.
Scale codebase:	Dự án lớn, nhiều người, JS thuần rất khó bảo trì.

- Static Typing vs Runtime
Static Typing vs Runtime là hai khái niệm rất hay gặp khi học TypeScript/JavaScript. 
Static Typing = kiểm tra kiểu dữ liệu trước khi chương trình chạy.
Runtime = chương trình thực sự chạy và lúc đó mới xảy ra lỗi nếu có vấn đề.

1. Static Typing

TypeScript kiểm tra kiểu dữ liệu trong lúc viết code / compile.

let age: number = 20;

age = "hello"; // TypeScript báo lỗi

Vì age được khai báo là number, TypeScript phát hiện "hello" là string trước khi chạy chương trình.

2. Runtime

Runtime là thời điểm JavaScript thực sự chạy.
JavaScript không kiểm tra type trước như TypeScript.

let age = 20;

age = "hello";

console.log(age);

Code vẫn chạy bình thường vì JavaScript cho phép biến thay đổi kiểu.

Một ví dụ lỗi runtime:

const user = null;

console.log(user.name);

Khi chạy chương trình:
TypeError: Cannot read properties of null
.Đây là runtime error vì lỗi chỉ xảy ra khi code thực sự chạy.




- Primitive Types
.string:

Trong bất kỳ ngôn ngữ lập trình máy tính nào, string là một dãy các ký tự được sử dụng để biểu diễn văn bản.
Trong JavaScript , String là một trong những giá trị cơ bản và String đối tượng là một lớp bao bọc xung quanh kiểu dữ liệu cơ bản String.

type Route = `/api/${'users' | 'orders'}`; // '/api/users' | '/api/orders'
type EventName = `on${Capitalize<'click' | 'hover'>}`; // 'onClick' | 'onHover'

.number:
Trong JavaScript, Number là kiểu dữ liệu số, được biểu diễn theo định dạng số thực dấu phẩy động 64-bit độ chính xác kép (double-precision 64-bit floating point) theo tiêu chuẩn IEEE 754.

let port: number = 3000;
let ratio: number = 0.75;
let hex: number = 0xff;
let big: number = 1_000_000; // numeric separator

type HttpSuccess = 200 | 201 | 204; // numeric literal type

.boolean:
Boolean là một kiểu dữ liệu logic chỉ có thể nhận các giá trị true hoặc false.

Ví dụ, trong JavaScript, các câu lệnh điều kiện Boolean thường được sử dụng để quyết định phần mã nào sẽ được thực thi (như trong câu lệnh if ) hoặc lặp lại (như trong vòng lặp for ).
let isActive: boolean = true;

.bigint:

Trong JavaScript, BigInt là một kiểu dữ liệu số dùng để biểu diễn các số nguyên có kích thước rất lớn, với độ chính xác tùy ý (arbitrary precision).

let huge: bigint = 9007199254740993n;
let fromFn: bigint = BigInt('123456789012345678901234567890');

const x = 10n + 5;  // Operator '+' cannot be applied to types 'bigint' and 'number'.
const y = 10n + 5n; // 

.symbol:
Symbol là một kiểu dữ liệu nguyên thủy trong JavaScript dùng để tạo ra các giá trị duy nhất. Nó thường được sử dụng làm khóa thuộc tính duy nhất để tránh xung đột tên gọi trong các đối tượng. `Symbol()` luôn tạo ra một Symbol mới, trong khi `Symbol.for()` trả về cùng một Symbol cho cùng một khóa từ kho lưu trữ Symbol toàn cục.

const id1 = Symbol('id');
const id2 = Symbol('id');
console.log(id1 === id2); // false

const REQUEST_ID: unique symbol = Symbol('requestId'); // unique symbol: type riêng cho từng const
const obj = { [REQUEST_ID]: 'abc-123' };

.null:

Trong khoa học máy tính, giá trị null biểu thị một tham chiếu trỏ đến một đối tượng hoặc địa chỉ không tồn tại hoặc không hợp lệ, thường là có chủ ý. Ý nghĩa của tham chiếu null khác nhau tùy thuộc vào ngôn ngữ lập trình.

Trong JavaScript, null được đánh dấu là một trong những giá trị nguyên thủy, vì hành vi của nó dường như là nguyên thủy. Tuy nhiên, khi sử dụng toán tử `typeof`, nó trả về "object".

console.log(typeof null); // "object"

.undefined:
`undefined` là một giá trị nguyên thủy được tự động gán cho các biến vừa mới được khai báo, hoặc cho các tham số hình thức không có tham số thực tế tương ứng.
Example
js
let x; // create a variable but assign it no value

console.log(`x's value is ${x}`); // logs "x's value is undefined"


- type vs interface, class

1. type: 
type dùng để đặt tên cho một kiểu dữ liệu.

type User = {
  name: string;
  age: number;
};

const user: User = {
  name: "John",
  age: 20
};

Điểm mạnh của type là có thể biểu diễn nhiều kiểu phức tạp

2. interface:
interface chủ yếu dùng để mô tả cấu trúc của object/class.

interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "John",
  age: 20
};

Interface có thể extends interface khác và có thể declaration merging

3. class: 
class khác hẳn type và interface.

class dùng để tạo object có dữ liệu + hành vi (methods).

class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, I'm ${this.name}`);
  }
}
class thực sự tồn tại khi JavaScript chạy.

Trong khi type và interface chủ yếu phục vụ TypeScript type checking và bị loại bỏ khi compile sang JavaScript.

- Optional Properties, Union Types, Narrowing
1. Optional Properties(?)

Khái niệm: Cho phép một property có thể có hoặc không có trong object. Dùng dấu ?.

interface User {
  name: string;
  age?: number;
}

const user1: User = {
  name: "John"
};

const user2: User = {
  name: "John",
  age: 20
};

. age?: number nghĩa là age không bắt buộc.

2. Union Types(|)

Khái niệm: Cho phép một biến có thể thuộc nhiều kiểu dữ liệu khác nhau. Dùng |.

let id: string | number;

id = 123;      // ✅
id = "ABC";    // ✅
id = true;     // ❌

string | number nghĩa là string hoặc number.

3. Narrowing

Khái niệm: Narrowing là quá trình TypeScript thu hẹp một Union Type thành một kiểu cụ thể bằng cách kiểm tra điều kiện.

Ví dụ:

function printId(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(2));
  }
}

- any, unknown, never, void.
1. any

Khái niệm: any cho phép biến nhận bất kỳ kiểu dữ liệu nào, và TypeScript gần như không kiểm tra kiểu.

let value: any = "hello";

value = 123;
value = true;
value.foo.bar; // Không báo lỗi khi viết code

.any = "Tôi không quan tâm kiểu của biến này."

2. unknown

Khái niệm: unknown cũng có thể chứa bất kỳ kiểu dữ liệu nào, nhưng an toàn hơn any. Muốn sử dụng giá trị, phải kiểm tra kiểu trước.

let value: unknown = "hello";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}

Không thể làm trực tiếp:

let value: unknown = "hello";

value.toUpperCase(); // ❌ Error

.unknown = "Tôi chưa biết kiểu, hãy kiểm tra trước khi sử dụng."

3. never

Khái niệm: never đại diện cho trường hợp không bao giờ xảy ra / function không bao giờ trả về giá trị.

Ví dụ function luôn throw error:

function error(message: string): never {
  throw new Error(message);
}

Function này không bao giờ return một giá trị bình thường.

.never = "Không bao giờ có giá trị trả về."

4. void

Khái niệm: void thường dùng cho function không trả về giá trị.

function sayHello(): void {
  console.log("Hello");
}

Function chạy xong nhưng không trả về kết quả:

sayHello();

.void = "Function không cần trả về giá trị."

- Generics, generic constraints


1. Generics

Khái niệm: Generics cho phép bạn viết code có thể làm việc với nhiều kiểu dữ liệu khác nhau mà vẫn giữ được type safety.

Ví dụ:

function identity<T>(value: T): T {
  return value;
}

const a = identity<string>("Hello");
const b = identity<number>(123);

Ở đây T là generic type.

identity("Hello") → T = string
identity(123)     → T = number

.Hiểu đơn giản:

Generics = viết một function/class dùng được cho nhiều kiểu dữ liệu.

2. Generic Constraints

Khái niệm: Generic Constraints dùng để giới hạn kiểu dữ liệu mà Generic được phép nhận.

Dùng extends.

function getLength<T extends { length: number }>(value: T): number {
  return value.length;
}

Bây giờ:

getLength("Hello");       // đúng
getLength([1, 2, 3]);     // đúng
getLength({ length: 10 });// đúng 

getLength(123);           // sai

Tại sao?

Vì:

T extends { length: number }

có nghĩa là:

T phải có property length kiểu number.

.Nhớ nhanh
Generics
→ T cho phép dùng nhiều kiểu dữ liệu.

Generic Constraints
→ T cho phép nhiều kiểu nhưng phải đáp ứng một điều kiện.

Ví dụ dễ nhớ:

// Generic
function identity<T>(value: T): T {
  return value;
}

// Generic Constraint
function getLength<T extends { length: number }>(value: T) {
  return value.length;
}




- Type assertions, as const
1. Type Assertions

Khái niệm: Type assertion cho TypeScript biết rằng "tôi biết giá trị này có kiểu cụ thể này", dù TypeScript chưa chắc chắn.

Dùng as.

let value: unknown = "Hello";

let text = value as string;

console.log(text.toUpperCase());

Ở đây:

value as string

có nghĩa là:

"Hãy coi value là string."

*Type assertion không chuyển đổi dữ liệu.

let value: unknown = "123";

let num = value as number;

console.log(num); // vẫn là "123" (string)

Nó chỉ nói cho TypeScript biết cách đối xử với type, không biến "123" thành 123.

2. as const

.Khái niệm: as const làm cho giá trị trở thành readonly và literal type, thay vì kiểu dữ liệu thông thường.

Ví dụ:

const status = "success";

TypeScript có thể hiểu:

status: "success"

Nhưng với object:

const user = {
  name: "John",
  age: 20
} as const;

TypeScript hiểu:

{
  readonly name: "John";
  readonly age: 20;
}

Nên không thể thay đổi:

user.name = "David"; // ❌ lỗi
user.age = 30;       // ❌ lỗi
Ví dụ dễ thấy hơn

Không có as const:

const colors = ["red", "blue"];

TypeScript thường hiểu:

string[]

Có as const:

const colors = ["red", "blue"] as const;

TypeScript hiểu:

readonly ["red", "blue"]

Các phần tử cũng trở thành literal type:

"red" | "blue"
. Nhớ nhanh
Type Assertion
→ "Tôi biết type này là gì."
→ value as string

as const
→ "Giữ nguyên giá trị cụ thể và không cho thay đổi."
→ readonly + literal type







- Utility Types:

Khái niệm: Utility Types là những type có sẵn trong TypeScript, giúp bạn biến đổi một type hiện có thành một type mới mà không cần viết lại từ đầu.

Ví dụ type ban đầu:

interface User {
  name: string;
  age: number;
  email: string;
}
1. Partial<T>

Biến tất cả properties thành optional.

type UpdateUser = Partial<User>;

Tương đương:

type UpdateUser = {
  name?: string;
  age?: number;
  email?: string;
};

Dùng khi update:

function updateUser(user: Partial<User>) {
  // ...
}

updateUser({ name: "John" }); // ✅



2. Required<T>

Ngược lại với Partial, biến tất cả properties thành bắt buộc.

type RequiredUser = Required<User>;


3. Pick<T, K>

Chỉ lấy một số properties từ type.

type UserName = Pick<User, "name" | "email">;

Kết quả:

type UserName = {
  name: string;
  email: string;
};
4. Omit<T, K>

Lấy tất cả properties trừ những properties được chỉ định.

type UserWithoutAge = Omit<User, "age">;

Kết quả:

type UserWithoutAge = {
  name: string;
  email: string;
};

.Nhớ nhanh
Partial  → tất cả thành optional
Required → tất cả thành required
Pick     → chọn một số properties
Omit     → bỏ một số properties

Ví dụ dễ nhớ nhất:

interface User {
  name: string;
  age: number;
  email: string;
}

type UpdateUser = Partial<User>;

type UserInfo = Pick<User, "name" | "email">;

type UserWithoutAge = Omit<User, "age">;
- keyof, typeof
1. keyof

Khái niệm: keyof lấy ra tên của các property trong một type hoặc interface và tạo thành một Union Type.

interface User {
  name: string;
  age: number;
  email: string;
}

type UserKey = keyof User;

Khi đó:

UserKey
// "name" | "age" | "email"

Ví dụ:

function getValue(user: User, key: keyof User) {
  return user[key];
}

const user = {
  name: "John",
  age: 20,
  email: "john@gmail.com"
};

getValue(user, "name"); // ✅
getValue(user, "age");  // ✅
getValue(user, "abc");  // ❌

. Nhớ:

keyof = lấy danh sách các key của một type.

2. typeof

Khái niệm: Trong TypeScript, typeof có thể lấy type của một biến hoặc giá trị đã tồn tại.

const user = {
  name: "John",
  age: 20
};

type User = typeof user;

TypeScript sẽ tạo:

type User = {
  name: string;
  age: number;
};

Tức là:

typeof user
     ↓
lấy type của user
     ↓
{name: string, age: number}
Một ví dụ rất hay gặp
const colors = {
  red: "#FF0000",
  blue: "#0000FF"
};

type Colors = typeof colors;

Kết quả:

type Colors = {
  red: string;
  blue: string;
};
 Phân biệt keyof và typeof
interface User {
  name: string;
  age: number;
}
keyof
type Keys = keyof User;

→

"name" | "age"

Lấy key.

typeof
const user = {
  name: "John",
  age: 20
};

type User = typeof user;

→

{name: string; age: number}

Lấy type.







- tsconfig.json
tsconfig.json

Khái niệm: tsconfig.json là file cấu hình của TypeScript project. Nó cho TypeScript biết compile code như thế nào và kiểm tra code theo những quy tắc nào.

Ví dụ:

{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "strict": true,
    "outDir": "./dist"
  },
  "include": ["src"]
}
Một số option quan trọng

target → JavaScript phiên bản nào sau khi compile.

"target": "ES2020"

module → cách sử dụng module.

"module": "commonjs"

strict → bật các kiểm tra TypeScript nghiêm ngặt.

"strict": true

Ví dụ:

let name: string = "John";

name = 123; // sai

outDir → nơi chứa JavaScript sau khi compile.

"outDir": "./dist"

Ví dụ:

project/
├── src/
│   └── index.ts
├── dist/
│   └── index.js
└── tsconfig.json

include → chỉ định những file/folder TypeScript cần xử lý.

"include": ["src"]
. Nhớ nhanh

tsconfig.json = file cấu hình cho TypeScript compiler.

Nó quyết định những thứ như:

target  → Compile thành JS phiên bản nào?
module  → Dùng module system nào?
strict  → Kiểm tra type nghiêm ngặt đến mức nào?
outDir  → Output JS ở đâu?
include → Compile những file nào?



- .d.ts
Khái niệm: File .d.ts là Type Declaration File trong TypeScript. Nó dùng để mô tả kiểu dữ liệu của code nhưng không chứa phần implementation.

Nói đơn giản:

.d.ts nói cho TypeScript biết "code này có những function, variable, class nào và chúng có kiểu gì".

Ví dụ

Giả sử có file JavaScript:

// math.js
function add(a, b) {
  return a + b;
}

Ta tạo file:

// math.d.ts
export function add(a: number, b: number): number;

File .d.ts không cần viết:

return a + b;

Nó chỉ khai báo:

add
↓
nhận number, number
↓
trả về number

Sau đó TypeScript biết cách kiểm tra:

import { add } from "./math";

add(10, 20);      // đúng
add("10", "20");  // sai
.d.ts thường dùng khi nào?

Một trường hợp rất phổ biến là thư viện JavaScript không viết bằng TypeScript.

Ví dụ bạn sử dụng một thư viện JavaScript nhưng TypeScript không biết function của thư viện nhận gì. .d.ts cung cấp thông tin type cho TypeScript.

. Nhớ nhanh
.ts  → TypeScript + code
.js  → JavaScript + code
.d.ts → chỉ khai báo type, không implementation