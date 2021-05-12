/*
while(something is true) {
    do some action
}

do {
  do some action at least once
} while(something is true);
*/

function while_operation() {
  var a = 100;

  while (a < 200) {
    document.write("A is: " + a + ", less than 200 <br>");
    a += 10;
    if (a == 150) {
      break; // stop and come out of the loop
    }
  }
  document.write("Out of While loop<br>");

  var b = 3 * 4 - 2; // 10
  while (b > 5) {
    document.write("B is greater than 5<br>");
    b -= 2;
  }
  document.write("Out of While loop<br><br>");
}

function do_while_operation() {
  var a = 10;

  do {
    document.write("A value is: " + a + "<br>");
    a += 10;
    //if (a > 50) break;
  } while (a <= 100);

  document.write("<br>");
  var b = 5;
  do {
    // executes at least once
    document.write("B value is: " + b + "<br>");
    b--;
  } while (b > 5);
}
