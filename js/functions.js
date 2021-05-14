function function1() {
  document.write("Welcome to Functions!");
}

function function2() {
  return "I am Function 2";
}

function function3() {
  return "I am in Function 3";
}

function do_sum(a, b, c) {
  return a + b + c;
}

function do_calculation(a, b, c = null) {
  // no need to pass c, it is optional
  let d = a * b - c;
  return d;
}

function add_numbers(a, b, c = null, d) {
  // need to pass c as null, because its not the last parameter. Also need to pass d, because its not optional param
  return a + b + c + d;
}

function nested_function() {
  return add_numbers(1, 2, 3, 4);
}

// Anonymous Function (no name for function)
var func = function () {
  return "Hello world";
};

// Anonymous function with params
var do_multiplication = function(x,y) {
  return x * y;
}

// Modern way of declaring functions, using Function constructor. Last param is the function body, others are params
var adv_func = new Function("a", "b", "c", "return a+b+c");

// passing default parameters
function check_if_holiday(day='monday') {
  if(day == 'sunday') {
    return("Today is a Holiday");
  }
  else {
    return("Today is not a holiday");
  }
}

// function with unlimited parameters as array
function function_with_array_of_params(...params) {
  return "Totally " + params.length + " parameters: " + params;
}
