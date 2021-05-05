function do_arithmetic_operations() {
  var a = 10;
  var b = 20;
  var c = 30;
  var m = 4;

  var d = a + b + c; // addition
  document.write("<p>");
  document.write("Addition value of a+b+c: " + d); // appends value to string

  var sub = c - b; // subtraction
  document.write("<p>Subtraction value is: " + sub);

  var mul = a * b;
  document.write("<p>Multiplication value is: " + mul);

  var div = c / a;
  document.write("<p>Division value is: " + div);

  var mod = c % m;
  document.write("<p>Modulus value is: " + mod);

  /*var inc1 = a++; // Post-increment
  document.write("<p>A value before Post-Increment is: " + inc1);

  document.write("<p>A value after post-increment is: " + a);

  var inc2 = ++a; // Pre-increment
  document.write("<p>Pre-Increment value for a is: " + inc2);*/

  var b = a++; // post-increment
  // first value of a is assigned to b
  // next the value of a is increased by 1
  document.write("<p>B: " + b);
  document.write("<p>A: " + a);

  var b = ++a; // pre-increment
  // first value of a is increased by 1
  // next the value of a is assigned to b
  document.write("<p>A: " + a);
  document.write("<p>B: " + b);

  var dec = 10;
  document.write("<p>Dec: " + dec);

  var e = dec--; // post-decrement
  // first value of dec is assigned to e
  // next the value of dec is decreased by 1
  document.write("<p>E: " + e);
  document.write("<p>Dec: " + dec);

  var e = --dec; // pre-decrement
  // first value of dec is decreased by 1
  // next the value of dec is assigned to e
  document.write("<p>E: " + e);
}
