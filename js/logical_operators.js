function do_logical_operations() {
  // && // Logical AND (if both the values are non-zero)
  // || // Logical OR (if any one of the values are true or non-zero)
  // ! // Logical NOT (opposite of current value)

  var a = true;
  var b = false;
  var c = a && b; // false
  console.log("True and False: " + c);

  var d = true;
  var e = false;
  var f = d || e;
  console.log("True or False: " + f);

  var abc = 5 == 5; // expression returns true
  var def = 10 < 20; // expression returns true
  var xyz = abc || def; // true or true returns true
  console.log(xyz);
  var lmn = abc && def; // true and true returns true
  console.log(lmn);

  var x = false; //(1 > 2)
  var y = false; //(2 > 3)
  var z = x || y; // x && y
  console.log("Two false expressions will always return: " + z);

  var a = true;
  var b = !a;
  console.log("Not true gives: " + b);
}
