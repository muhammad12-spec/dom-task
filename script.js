
const numbers = [1, 2, 3, 4, 5];
const result = numbers.map(num => num * 3) ;
console.log(result);  

const nums = [12, 5, 8, 130, 44];
const found = nums.find(num => num > 10);
console.log(found);

 const fruits = ["apple", "banana", "mango"];

fruits.forEach(fruit => {
  console.log('Fruit: ${fruit}');
});
 const users = [
  { name: "Ali", age: 22 },
  { name: "Sara", age: 18 },
  { name: "Ahmed", age: 25 }
];

const names = users.map(user => user.name);
console.log(names);

 const adults = users.filter(user => user.age >= 18);
console.log(adults);
 const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" },
  { id: 3, name: "Tablet" }
];

const product = products.find(p => p.id === 2);
console.log(product);

 const scores = [70, 85, 90, 60];

const allAbove50 = scores.every(score => score > 50);
console.log(allAbove50);

 const emails = [
  "test@gmail.com",
  "hello@yahoo.com",
  "admin@gmail.com"
];

const hasGmail = emails.some(email => email.includes("@gmail.com"));
console.log(hasGmail);



const students = [
  { name: "Ali", marks: 80 },
  { name: "Sara", marks: 45 },
  { name: "Ahmed", marks: 90 },
  { name: "Zara", marks: 60 }
];


const passedStudents = students
  .filter(student => student.marks >= 60)
  .map(student => student.name);

console.log(passedStudents);