function do_arithmetic_operations() {
  var a = 10;
  var b = 20;
  var c = 30;
  var m = 4;

  document.write("<p>A is: " + a);
  document.write("<p>B is: " + b);
  document.write("<p>C is: " + c);
  document.write("<p>M is: " + m);

  var d = a + b + c; // addition
  document.write("<p>");
  document.write("Addition value of a+b+c: " + d); // appends value to string

  var sub = c - b; // subtraction
  document.write("<p>Subtraction value of c-b is: " + sub);

  var mul = a * b;
  document.write("<p>Multiplication value of a*b is: " + mul);

  var div = c / a;
  document.write("<p>Division value of c/a is: " + div);

  var mod = c % m; // Remainder after we divide c by m
  document.write("<p>Modulus value of c%m is: " + mod);

  var inc1 = a++; // Post-increment
  document.write("<p>A value before Post-Increment is: " + inc1);

  document.write("<p>A value after post-increment is: " + a);

  var inc2 = ++a; // Pre-increment
  document.write("<p>Pre-Increment value for A is: " + inc2);

  document.write("<p>A is: " + a);
  document.write("<p>B is: " + b);

  var b = a++; // post-increment
  // first value of a is assigned to b
  // next the value of a is increased by 1
  document.write("<p>A after post-increment: " + a);
  document.write("<p>B after post-increment of A: " + b);

  var b = ++a; // pre-increment
  // first value of a is increased by 1
  // next the value of a is assigned to b
  document.write("<p>A after pre-increment: " + a);
  document.write("<p>B after pre-increment of A: " + b);

  var Dec = 10;
  document.write("<p>Dec is: " + Dec);

  var e = Dec--; // post-decrement
  // first value of dec is assigned to e
  // next the value of dec is decreased by 1
  document.write("<p>Dec after post-decrement: " + Dec);
  document.write("<p>E after post-decrement of Dec: " + e);

  var e = --Dec; // pre-decrement
  // first value of dec is decreased by 1
  // next the value of dec is assigned to e
  document.write("<p>Dec after pre-decrement: " + Dec);
  document.write("<p>E after pre-decrement of Dec: " + e);
}
