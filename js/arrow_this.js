//var age = 30; // global variable

// A Person object
function Person() {
  this.name = 'Jack';
  this.age = 25;
  console.log("This inside function: " + this);

  this.getAge = function () {
    // this is accessible
    console.log("Age inside function: " + this.age);

    function innerFunc() {

      // this refers to the global object
      console.log("This inside inner normal function: " + this);
      console.log("Age inside inner normal function: " + this.age);
    }
    innerFunc();
  }
}

// Another Person object
function PersonArrow() {
  this.name = 'Jack';
  this.age = 25;
  console.log("This inside function: " + this);

  this.getAge = function () {
    // this is accessible
    console.log("Age inside function: " + this.age);

    let innerFunc = () => {
      // this will now refer parent scope
      console.log("This inside inner arrow function: " + this);
      console.log("Age inside inner arrow function: " + this.age);
    }
    innerFunc();
  }
}


// Owner of the below function is the button
function whoiscallingthis1() {
  console.log("Caller: " + this);
}

// Owner of the below function is the global window, because this will refer to parent scope in case of arrow functions
// whoiscallingthis2 = () => {
//   console.log("Caller: " + this);
// };

function whoiscallingthis2() {
  console.log("Caller: " + this);
}

