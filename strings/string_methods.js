

//for uppercase

var str = "viraj";
console.log(str.toUpperCase());

//for lowercase

var str = "HELLO";
console.log(str.toLowerCase());


//for target spacific item in the string
var str = "JavaScript";
console.log(str.slice(0, 4));


//for target spacific item in the string
var str = "JavaScript";
console.log(str.substring(4, 10));


//for target spacific item in the string
var str = "JavaScript";
console.log(str.substr(4, 6));


//for replace element
var str = "Hello World";
console.log(str.replace("World", "Viraj"));


//for replacing all elements
var str = "apple apple apple";
console.log(str.replaceAll("apple", "mango"));


//for merge two or more strings
var a = "Hello";
var b = "Viraj";

console.log(a.concat(" ", b));


//to remove extra space
let str = "   Hello   ";
console.log(str.trim());


//return character by index number
let str = "JavaScript";
console.log(str.charAt(2));



//to return UTF-16 code unit
let str = "ABC";
console.log(str.charCodeAt(0));



//to conver string to array
let str = "HTML,CSS,JavaScript";
console.log(str.split(","));

//return matching index number
let str = "Hello World";
console.log(str.indexOf("o"));

//to return last matching index number
let str = "Hello World";
console.log(str.lastIndexOf("o"));

//serching index number
let str = "Hello World";
console.log(str.search("World"));

//to check perticular element is part of string or not
let str = "I am learning JavaScript";
console.log(str.includes("JavaScript"));

//to check string start with the same element
let str = "JavaScript";
console.log(str.startsWith("Java"));

//to check string end with same element
let str = "JavaScript";
console.log(str.endsWith("Script"));