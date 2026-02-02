const numbers = [1, 2, 3, 4, 5];

const multiplied = numbers.map(num => num * 3);

console.log(multiplied);
// [3, 6, 9, 12, 15]


const nums = [12, 5, 8, 130, 44];

const greaterThanTen = nums.filter(num => num > 10);

console.log(greaterThanTen);
// [12, 130, 44]

const fruits = ["apple", "banana", "mango"];

fruits.forEach(fruit => {
  console.log(`Fruit: ${fruit}`);
});


const users = [
  { name: "Ali", age: 22 },
  { name: "Sara", age: 18 },
  { name: "Ahmed", age: 25 }
];

const names = users.map(user => user.name);

console.log(names);
// ["Ali", "Sara", "Ahmed"]


const adults = users.filter(user => user.age >= 18);

console.log(adults);


const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" },
  { id: 3, name: "Tablet" }
];

const product = products.find(item => item.id === 2);

console.log(product);
// { id: 2, name: "Phone" }


const scores = [70, 85, 90, 60];

const allAbove50 = scores.every(score => score > 50);

console.log(allAbove50);
// true


const emails = ["test@gmail.com", "hello@yahoo.com", "admin@gmail.com"];

const hasGmail = emails.some(email => email.includes("@gmail.com"));

console.log(hasGmail);
// true


const students = [
  { name: "Ali", marks: 80 },
  { name: "Sara", marks: 45 },
  { name: "Ahmed", marks: 90 },
  { name: "Zara", marks: 60 }
];

const passedStudents = students
  .filter(student => student.marks >= 50)
  .map(student => student.name);

console.log(passedStudents);
// ["Ali", "Ahmed", "Zara"]
