// Owner of the below function is the button
function whoiscallingthis1() {
    console.log("Caller: " + this);
}

// Owner of the below function is the global window
whoiscallingthis2 = () => {
    console.log("Caller: " + this);
}

function Person() {
    this.name = 'Ramesh'; // global
    this.printName = function () {

        // this is accessible locally
        console.log("Local value of Name: " + this.name);

        function innerFunc() {
            // this refers to the global object
            console.log("Global value of Name: " + this.name);
            console.log("This: " + this);
            console.log("This.name: " + this.name);
        }
        innerFunc();
    }
}

function PersonArrow() {
    this.name = 'Suresh'; // global
    this.printName = function () {
        
        // this is accessible locally
        console.log("Local value of Name: " + this.name);

        // Arrow function can refer parent scope
        let innerFunc = () => {
            console.log("Global value of Name: " + this.name);
            console.log("This: " + this);
            console.log("This.name: " + this.name);
        }
        innerFunc();
    }
}