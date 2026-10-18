
let student = {
    name: "Viraj",
    age: 21,
    city: "Mumbai"
};

console.log("Original Object:", student);

// 1. Object.keys()
console.log("Keys:", Object.keys(student));

// 2. Object.values()
console.log("Values:", Object.values(student));

// 3. Object.entries()
console.log("Entries:", Object.entries(student));

// 4. Object.assign()
let copy = Object.assign({}, student);
console.log("Copied Object:", copy);

// 5. Object.hasOwn()
console.log("Has name:", Object.hasOwn(student, "name"));
console.log("Has marks:", Object.hasOwn(student, "marks"));

// 6. Object.freeze()
let frozenStudent = { name: "Viraj", age: 21 };

Object.freeze(frozenStudent);
frozenStudent.age = 25; // Change will not happen
frozenStudent.city = "Mumbai"; // Add will not happen

console.log("Frozen Object:", frozenStudent);

// 7. Object.seal()
let sealedStudent = { name: "Viraj", age: 21 };

Object.seal(sealedStudent);
sealedStudent.age = 25; // Allowed
sealedStudent.city = "Mumbai"; // Add will not happen
delete sealedStudent.name; // Delete will not happen

console.log("Sealed Object:", sealedStudent);
