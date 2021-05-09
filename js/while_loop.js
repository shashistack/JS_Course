/*
while(something is true) {
    do some action
}
*/

function while_operation() {
  var a = 100;

  while (a < 200) {
    document.write("A is less than 200 <br>");
    a += 50;
  }
  document.write("Out of While loop<br>");

  var b = 3 * 4 - 2; // 10
  while (b > 5) {
    document.write("B is greater than 5<br>");
    b -= 2;
  }
  document.write("Out of While loop<br>");
}
