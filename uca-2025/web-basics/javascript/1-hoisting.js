// Functional vs Block

// Function scope created by a function
// Block scope created by {} (e.g., if, else, for, while, do)

// Hoisting - move the declaration to the top of the scope (function or block)
// Hoisting applies to var, function, let, const, class, import

// Hositing of var and let
// var hoisting - move the var declaration to the top of the innermost function
// let hoisting - move the let declaration to the top of the innermost block scope

function foo() {
  // var will be hoisted to the top of the function
  console.log("var x before is: ", x); // undefined
  console.log("let y before is: ", y); // ReferenceError: y is not defined
  if (true) {
    // let will be hoisted to the top of the innermost scope
    var x = 2;
    let y = 3;
  }
}

function foo() {
  if (true) {
    var x = 2;
    let y = 3;
  }
  console.log("var x after is: ", x); // 2
  console.log("let y after is: ", y); // ReferenceError: y is not defined
}

function foo() {
  if (true) {
    console.log("var x after is: ", x); // undefined
    console.log("let y after is: ", y); // ReferenceError: Cannot access 'y' before initialization
    var x = 2;
    let y = 3;
  }
  console.log("var x after is: ", x);
  console.log("let y after is: ", y);
}

function foo() {
  if (true) {
    var x = 2;
    let y = 3;
    console.log("var x after is: ", x); // 2
    console.log("let y after is: ", y); // 3
  }
  console.log("var x after is: ", x); // 2
  console.log("let y after is: ", y); // ReferenceError: y is not defined
}

// FUnctions hoisting
fooF(); // Function foo called
function fooF() {
  console.log("Function foo called");
}

fooTV(); // Uncaught TypeError: fooTV is not a function at <anonymous>:1:1
var fooTV = function() {
  console.log("Function foo called");
};

fooL(); // VM1360:2 Uncaught ReferenceError: Cannot access 'fooL' before initialization
let fooL = function() {
  console.log("Function foo called");
};

function foo() {
  fooL(); // VM1360:2 Uncaught ReferenceError: Cannot access 'fooL' before initialization
  let fooL = function() {
    console.log("Function foo called");
  };
}
