let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];

let namesB = names.filter(name => name.charAt(0) === 'B');

let namesLength = names.map(name => name.length());

let namesReduce = names.reduce((total, name) => total + name.length, 0) / names.length;

console.log(namesB);
console.log(namesLength);
console.log(namesReduce);

const numbers = [1,2,3,4];
let doubleNumber = numbers.map(number => number*2);

console.log(namesLetter);

const numbers2 = [1,2,3,4,5,6,7];
let evens = numbers2.filter(number => number%2 === 0);

let sumvalue = numbers2.reduce((total, number) => total + number, 10);

const colors = ["red", "blue", "green", "yellow"];

colors.forEach(color => console.log(color));

const numbers3 = [10, 25, 40, 55, 70];

let firstLargeNumber = numbers3.find(number => number > 30);

const names2 = ["Alice", "Bob", "Charlie", "David"];

let charlieIndex = names2.indexOf("Charlie");

// 1️⃣ map() courses to subject list

const courses = [
  "CSE 110",
  "CSE 111",
  "WDD 130",
  "WDD 131",
  "WDD 231",
  "CSE 210"
];

function subjectList(list) {
    return `<ul>
                ${list.map(course => `<li>${course}</li>`).join("")}
            </ul>`;
}

function renderSubjects() {
    const html = subjectList(courses);
    document.querySelector("#subjects").innerHTML = html;
}

const subjectlist = `<ul>${courses.map(course => `<li>${course}</li>`).join('')}</ul>`;
document.querySelector("#subjects").innerHTML = subjectlist;

// 2️⃣ filter() countries to those starting with "U"

const countries = [
  "Uganda",
  "United States",
  "Uruguay",
  "Brazil",
  "Canada",
  "Germany",
  "Japan",
  "Mexico",
  "Spain",
  "Turkey"
];

const countrylist = `<ul>${countries.filter(country => country.charAt(0) === "U").map(country => `<li>${country}</li>`).join("")}</ul>`;
document.querySelector("#u").innerHTML = countrylist;

const countryfilter = countries.filter(country => country.charAt(0) === "U");
const countrymap = `<ul>${countryfilter.map(country => `<li>${country}</li>`).join("")}</ul>`;
document.querySelector("#u").innerHTML = countrymap;

// 3️⃣ reduce() array of objects to total cost.

const fruits = [
  { name: "apple", price: 1 },
  { name: "banana", price: 0.5 },
  { name: "orange", price: 1.2 },
  { name: "grape", price: 0.1 }
];

const fruitssum = fruits.reduce((total, fruit) => total + fruit.price, 0);
document.querySelector("#total").innerHTML = fruitssum.toFixed(2);

// 4️⃣ loop through the array

const students = [
  { fullName: "Alice Johnson", state: "California, USA", class: "Mathematics" },
  { fullName: "Benjamin Lee", state: "Ontario, Canada", class: "Computer Science"},
  { fullName: "Chloe Smith", state: "London, UK", class: "Physics" },
  { fullName: "David Kim", state: "Seoul, South Korea", class: "Engineering" },
  { fullName: "Elena Rodriguez", state: "Madrid, Spain", class: "Biology" },
  { fullName: "Felix Müller", state: "Berlin, Germany", class: "History" }
];

let studentList = "";
students.forEach(student => {studentList += `<li>${student.fullName}</li>`;});
document.querySelector("#studentList").innerHTML = studentList;

// 5️⃣ find first 'expensive' product

const products = [
  {
    name: "Widget A",
    partNumber: "WA-123",
    quantity: 50,
    price: 12.5
  },
  {
    name: "Gear B",
    partNumber: "GB-456",
    quantity: 100,
    price: 3.75
  },
  {
    name: "Lever C",
    partNumber: "LC-789",
    quantity: 25,
    price: 25.0
  },
  {
    name: "Bolt D",
    partNumber: "BD-012",
    quantity: 200,
    price: 0.5
  },
  {
    name: "Panel E",
    partNumber: "PE-345",
    quantity: 10,
    price: 50.0
  },
  {
    name: "Wire F",
    partNumber: "WF-678",
    quantity: 150,
    price: 1.25
  },
  {
    name: "Tube G",
    partNumber: "TG-901",
    quantity: 30,
    price: 18.0
  }
];

const firstExpensive = products.find(product => product.price > 20);
const firstExpensiveHTML = `<p>${firstExpensive.name}</p>`;
document.querySelector("#product").innerHTML = firstExpensiveHTML;


// 6️⃣ determine if Canada is contained within the array countries
const indexOfCanada = countries.indexOf("Canada");
const indexOfCHTML = `<p>${indexOfCanada}</p>`;
document.querySelector("#output").innerHTML = indexOfCHTML;