function do_assignment_operations() {
  // +=, -=, *=, /=, %=
  var a = 10; // assignment
  a += 10; // add 10 to a and assign back to a
  //a = a + 10;
  // can also be written as: a = a + 10;
  console.log(a);

  var b = a; // b = 20
  b -= 10; // same as b = b - 10;
  console.log(b);

  var c = 20;
  c *= 5; // c = c * 5
  console.log(c);

  var d = 20;
  d /= 5; // d = d / 5
  console.log(d);

  var e = 10;
  e %= 3;
  console.log(e);
}
