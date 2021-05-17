// Normal Function
function add(a, b) {
  return a + b;
}

// Arrow Function Syntax
/*
() => some_expression
() => { //some statements }
(param1,param2) => { //some statements }
*/

let num = () => 50; // let num = () => {return 50;}
console.log(num());

const num2 = () => {
  return 50;
};
console.log(num2());

let hello = () => "Hello World";
console.log(hello());

let add_arrow = (a, b) => a + b;
console.log(add_arrow(10, 20));

let add_numbers = (a, b) => {
  let c = a + b - 4 * 2;
  return c;
};
console.log(add_numbers(10, 20));

// function with unlimited parameters as array (Rest parameter)
function function_with_array_of_params(...abc) {
  return "Totally " + abc.length + " parameters: " + abc;
}

var af = (...p) => console.log(p);
af(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

var af2 = (p1, p2, ...p3) => {
  return p1 + p2 + sum(p3);
};

function sum(arr) {
  var total = 0;
  for (var i in arr) {
    total += arr[i];
  }
  return total;
}
var sum_result = af2(1, 2, 3, 4, 5);
console.log("Sum Result: " + sum_result);
