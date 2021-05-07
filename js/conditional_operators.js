function check_conditions() {
  // (expression)?value1:value2
  var a = 10;
  var b = 20;
  var c = a - b < 10 ? "negative" : "positive";
  document.write("C value is: " + c);
  document.write("<br>");

  /*if (10 - 10 + 4 - 4 == 0) {
    d = true;
  } else {
    d = false;
  }*/
  var d = 10 - 10 + 4 - 4 == 0 ? true : false;

  document.write("D value is: " + d);
  document.write("<br>");

  var abc = 100;
  document.write(
    abc == 100 ? "abc is equal to 100" : "abc is not equal to 100"
  );
}
