function do_switch_check() {
  var a = 15;
  var b = 20;
  var c = a < b ? 100 : 200;

  // single expression, single value, single match case
  switch (c) {
    case true:
      document.write("True");
      break;
    case 1:
      document.write("1");
      break;
    case 2:
      document.write("This case is matching!<br>");
      document.write("2");
      break;
    case 10:
      document.write("10");
      break;
    default:
      document.write("Default case");
      break;
  }
  document.write("<br>Switch case block executed!");
}
