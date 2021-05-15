// Normal Function
function add(a,b) {
    return a+b;
}

// Arrow Function Syntax
/*
() => some_expression
() => { //some statements }
(param1,param2) => { //some statements }
*/

let num = () => 50; // let num = () => {return 50;}
console.log(num())

let hello = () => 'Hello World';
console.log(hello())

let add_arrow = (a,b) => a+b;
console.log(add_arrow(10,20));

// function with unlimited parameters as array
function function_with_array_of_params(...params) {
    return "Totally " + params.length + " parameters: " + params;
  }
