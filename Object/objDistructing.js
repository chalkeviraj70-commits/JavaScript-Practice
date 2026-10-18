
console.log("----- ARRAY DESTRUCTURING -----");

let colors = ["Red", "Green", "Blue"];

// Extract array values into variables
let [color1, color2, color3] = colors;

console.log(color1); // Red
console.log(color2); // Green
console.log(color3); // Blue

// Skipping an element
let [first, , third] = colors;

console.log(first); // Red
console.log(third); // Blue

// Default value
let [a, b, c, d = "Yellow"] = colors;

console.log(d); // Yellow

// Swapping variables
let x = 10;
let y = 20;

[x, y] = [y, x];

console.log(x); // 20
console.log(y); // 10


console.log("----- OBJECT DESTRUCTURING -----");

let student = {
    name: "Viraj",
    age: 21,
    city: "Mumbai",
    marks: 85
};

// Extract object properties into variables
let { name, age, city, marks } = student;

console.log(name);  // Viraj
console.log(age);   // 21
console.log(city);  // Mumbai
console.log(marks); // 85

// Rename variables
let { name: studentName, age: studentAge } = student;

console.log(studentName); // Viraj
console.log(studentAge);  // 21

// Default value
let { course = "BSc IT" } = student;

console.log(course); // BSc IT

// Nested object destructuring
let employee = {
    name: "Rahul",
    address: {
        city: "Thane",
        state: "Maharashtra"
    }
};

let {
    address: { city: employeeCity, state }
} = employee;

console.log(employeeCity); // Thane
console.log(state);        // Maharashtra
