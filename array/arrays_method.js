//add element at the last

var a = [10, 20, 30];
a.push(40);
console.log(a);


//remove element at the end
var a = [10, 20, 30];
a.pop();
console.log(a);


//add element at the start
var a = [20, 30];
a.unshift(10);
console.log(a)



//remove element at the start
let a = [10, 20, 30];
a.shift();
console.log(a);


//return index number from the starting
var a = [10, 20, 30, 20];

console.log(a.indexOf(20)); // 1
console.log(a.indexOf(50)); // -1


//return index number from the end
var a = [10, 20, 30, 20];

console.log(a.lastIndexOf(20)); // 3

//check element is exit or not
var a = [10, 20, 30];

console.log(a.includes(20)); // true
console.log(a.includes(50)); // false



// find an element

var a = [10, 25, 30, 40];

var result = a.find(num => num > 25);
console.log(result); // 30


//find and return index number
var a = [10, 25, 30, 40];

console.log(a.findIndex(num => num > 25));


//to sorting number
var a = [40, 10, 30, 20];

a.sort((x, y) => x - y);
console.log(a);
// [10, 20, 30, 40]

//sorting in ascending order
var a = [40, 10, 30, 20];

a.sort((x, y) => y - x);
console.log(a);
// [40, 30, 20, 10]


//reverse array
var a = [10, 20, 30, 40];

a.reverse();
console.log(a);
// [40, 30, 20, 10]



//sorting array without changing original array
var a = [30, 10, 20];

var result = a.toSorted((x, y) => x - y);

console.log(result); // [10, 20, 30]
console.log(a);      // [30, 10, 20]


//reverse array without changing original array
let a = [10, 20, 30];

console.log(a.toReversed()); // [30, 20, 10]
console.log(a);              // [10, 20, 30]



//taking spacific element which we are targeting
var a = [10, 20, 30, 40, 50];

console.log(a.slice(1, 4));
// [20, 30, 40]

console.log(a);
// [10, 20, 30, 40, 50]


//splice is use for add, delete and replace the element in between
//remover element in between
var a = [10, 20, 30, 40];

a.splice(1, 2);

console.log(a);

//add element in between
var a = [10, 30];

a.splice(1, 0, 20);

console.log(a);
// [10, 20, 30]



//remove element in between
var a = [10, 20, 30];

a.splice(1, 1, 99);

console.log(a);
// [10, 99, 30]




//check it's belong in array or not
let a = [10, 20, 30];
console.log(Array.isArray([10, 20])); // true
console.log(Array.isArray("Hello"));  // false


//adding element inside the array
var a = ["HTML", "CSS", "JavaScript"];

console.log(a.join(" - "));
// HTML - CSS - JavaScript

//use to merge two or more array
var a = [10, 20];
var b = [30, 40];

var result = a.concat(b);

console.log(result);
// [10, 20, 30, 40]

//use to converting element into string
let a = [10, 20, 30];

console.log(a.toString());


