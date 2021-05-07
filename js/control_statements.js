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
  document.write("<br>");

  if (a < 20) {
    document.write("a < 20");
  } else {
    document.write("a is not less than 20");
  }
  document.write("<br>");

  a = 65;
  if (a < 30) {
    document.write("a < 30");
  } else if (a < 40) {
    document.write("a < 40");
  } else if (a < 50) {
    document.write("a < 50");
  } else {
    document.write("a is not less than 50");
  }
}
