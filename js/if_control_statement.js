function do_control_checks() {
  a = 10;

  //   if(a < 20)
  //   document.write("a<20");

  if (a < 20) {
    document.write("a < 20");
  }
  document.write("<br>");
  if (a < 30) {
    document.write("a < 30");
  }
  if (a < 40) {
    document.write("a < 40");
  }
  document.write("<br>");
  if (a < 50) {
    document.write("a < 50");
  }
  document.write("<br>");

  if (a < 20) {
    document.write("a < 20");
  } else {
    document.write("a is not less than 20");
  }
  document.write("<br>");

  a = 65;
  // multiple expression checks
  if (a < 30) {
    document.write("a < 30");
  } else if (a < 40) {
    document.write("a < 40");
  } else if (a < 50) {
    document.write("a < 50");
  } else if (a < 70) {
    document.write("a < 70");
  } else if (a < 80) {
    // if (a < 80) {
    document.write("<br>a is also less than 80, but not printed");
  } else {
    document.write("a is not less than 50");
  }

  document.write("<br>Out of If Else condition block");
}
