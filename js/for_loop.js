/*for(variable value is matching with a condition) {
    do some action
}*/

function for_example() {
  for (var i = 1; i <= 10; i++) {
    document.write("I value is: " + i + "<br>");

    //if (i <= 5) continue; // continue execution of loop, from next step, skip below code

    if (i == 5) {
      break; // break the entire loop
    }
    document.write("Executing For Loop: ");
  }
  document.write("<br><br><br>");

  for (let i = 10; i > 0; i--) {
    document.write("I value is: " + i + "<br>");
  }
  document.write("<br><br>");

  for (let i = 1; i <= 10; i++) {
    console.log("Inside ForLoop iteration: " + i);
    if (i <= 5) continue;
    document.write("I is: " + i + "<br>");
  }
}
