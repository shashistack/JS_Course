//alert("Hello world");

// console is useful for developer to print some useful information to the browser console.
console.log("Welcome to browser console");
console.log(3 + 3);
// We can print something on the page directly
document.write(
  "This line is printed using javascript! Open the console to see more messages... press F12"
);

// Basic Data Types
// Numeric
// Strings
// boolean (True or False)

// var 123 = 10; // not allowed, cannot start variable name with a number

var a = 100034; // global variable
var A = 154234234;
var b = "hello"; // global scope
//let b = 5; // not allowed in scope, already declared
var c = true;
var d;
d = 10.3; // we can also assign value after declaring the variable

//console.log(a + A);
console.log("B:" + b);
console.log("C:" + c);
console.log("D:" + d);

let e = 30; // fresh assignment
//let e = 32; // not allowed, already declared
//var e = 35; // not allowed
// const f; // not allowed, need value
const f = 40; // constant value
//f = 35; //not allowed, constant variable cannot be reassigned a new value
let g; // no value assigned

console.log("E:" + e);
console.log("F:" + f);
//console.log("H:" + h); // not defined
//const i = 1; // global scope

function printSomething() {
  let b = 15; // local scope, overriding global value
  g = 25; // local scope
  e = 18; // overriding value
  //f = 35; // not allowed, throws error, cannot reassign
  const i = 1; // local scope

  console.log("B inside function:" + b);
  console.log("E inside function:" + e);
  console.log("F inside function:" + f);
  console.log("G inside function:" + g);
  console.log("I inside function:" + i);
}

printSomething();
console.log("B outside function:" + b); // global scope
console.log("G outside function:" + g);
//console.log("I outside function:" + i); // not allowed, as it is not accessible outside
