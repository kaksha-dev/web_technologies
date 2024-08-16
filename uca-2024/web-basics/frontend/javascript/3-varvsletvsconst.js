/*
  * Global Scope
  * Function Scope
  * Block Scope
*/

var gloablvar1 = "Global Value"

function foo1() {
  var var1 = "var1value";
  let let1 = "let1value";

  console.log("The value of var1 is: ", var1);
  console.log("The value of let1 inituially is: ", let1);
  if (true) {
    var var1 = "var2value";
    let let1 = "let2value";
    console.log("The value of var1 inside if block is: ", var1);
    console.log("The value of let1 inside if block is: ", let1);
  }
  //   console.log("The value of var1 is: ", var1);
  console.log("The value of let1 is: ", let1);
}

console.log("The value of var1 outside function is: ", var1);
console.log("The value of let1 outside function is: ", let1);

foo1();
