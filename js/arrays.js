var arr = [1, 2, 3, 4, 5]; // default way to declare array
console.log(arr);

var arr2 = new Array(6, 7, 8, 9, 10); // old fashion
console.log(arr2);

console.log("Length of array arr is: " + arr.length); // print array length

var arr3 = arr.concat(arr2); // join multiple arrays
console.log(arr3);

var arr4 = arr.join("-"); // join array elements with a separator
console.log(arr4);

var arr5 = [];
for (let i = 1; i <= 10; i++) { // dynamically adding values to array
    arr5[i - 1] = i;
}
console.log(arr5);

var arr6 = [];
for (let i = 1; i <= 10; i++) { // dynamically adding values to array using push
    arr6.push(i);
}
console.log(arr6);

console.log("Looping through Array with forEach");
arr.forEach(function (val, ind, arr) {
    console.log("Index is " + ind);
    console.log("Value is " + val);
});

console.log("Looping through Array with forEach");
var new_arr = [];
arr.forEach(multiplyByTwo);
function multiplyByTwo(val) {
    new_arr.push(val * 2);
}
console.log(new_arr);

// Associative array (object) with keys and values
var ass_arr = { 'a': 1, 'b': 2, 'c': 3 };
console.log(ass_arr);
for (x in ass_arr) { // looping with index
    console.log("Index is: " + x + ", Value is: " + ass_arr[x]);
}

console.log("Array Pop Function");
var my_arr = [1, 4, 9];
console.log(my_arr.pop()); // removes the last element from an array
console.log(my_arr);

console.log("Array Every Function");
var my_arr = [2, 4, 6, 9, 10];
// it will return true/false based on whether every element satisfies a condition 
console.log(my_arr.every(isDivisibleByTwo));

function isDivisibleByTwo(element, index, array) {
    return (element % 2 == 0);
}

console.log("Array Filter Function");
var my_arr = [1, 3, 5, 8, 9];
// check condition on every element of array
var filtered_array = my_arr.filter(isOdd);
console.log(filtered_array);
console.log("Original Array:" + my_arr);

function isOdd(element, index, array) {
    return (element % 2 == 1);
}

console.log("Array Map Function");
var numbers = [1, 4, 9];
// apply condition on every element of array
var roots = numbers.map(Math.sqrt);
console.log("Square roots are: " + roots);
//console.log(numbers);

console.log("Map with Anonymous Function");
var a = [1, 2, 3];
let b = a.map(function (x) { return x * 5; });
console.log(b);

console.log("Map with Arrow Function");
let c = a.map((x) => x * 2);
console.log(c);

let d = a.map(multiplyByThree);
function multiplyByThree(val) {
    return val * 3;
}
console.log(d);

let e = a.map((val) => val * 3); // short syntax using arrow function
console.log(e);

let my_new_arr = [1, 2, 3, 4, 5];
console.log("Array Reduce Result is: " + my_new_arr.reduce(getSum, 0)); // reduce will apply function on every element of array, and produces a single final value

function getSum(sum, num) {
    sum = sum + num;
    return sum;
}

console.log("Array find Result");
var numbers = [3, 10, 18, 20];

function aboveTen(num) {
    return num > 10;
}
console.log(numbers.find(aboveTen)); // retuns the first element that satisfies a function

console.log("Array Includes example");
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var includes_result = fruits.includes("Mango"); // returns true/false
console.log("Includes result: " + includes_result);

console.log("Array indexOf Method");
// indexOf returns the first index of an element within the array, or -1 if not found
var even_nos = [2, 4, 6, 8, 10, 12, 8, 14, 8];
console.log(even_nos);
console.log("First position of number 8: " + even_nos.indexOf(8));

console.log("Array lastIndexOf Method");
var odd_nos = [1, 3, 5, 7, 9, 11, 13, 15, 11, 11, 17, 19];
console.log(odd_nos);
console.log("Last position of number 11: " + odd_nos.lastIndexOf(11));

console.log("Array Slice method"); // extract elements from array
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// extract the array elements starting from index 1 and stop at index 3
var citrus = fruits.slice(1, 3); // "Orange", "Lemon"
console.log("Slice Result: " + citrus);
console.log(fruits);
console.log(fruits.slice(-3)); // [ "Lemon", "Apple", "Mango" ]
console.log(fruits.slice(2, -1)); // [ "Lemon", "Apple" ]
console.log(fruits.slice(-3, -2)); // [ "Lemon" ]

console.log("Array Splice method"); // splice removes elements from array
var arr = [1, 2, 3, 4, 5];
arr.splice(2, 1); // starting from position 2, remove one element from array
console.log("After removing element at position 2: " + arr); // [1, 2, 4, 5]
arr.splice(2, 2); // remove 2 elements starting from position 2
console.log("After another splice operation: " + arr); // [1,2]
arr.splice(2, 0, 3, 4, 5); // remove 0 elements from position 2, and add new elements: 3,4,5
console.log("After another splice operation: " + arr); // [1,2,3,4,5]
arr.splice(3, 1, "Hi", "Hello"); // remove 1 element from positon 3, and then add new elements
console.log("After another splice operation: " + arr);

