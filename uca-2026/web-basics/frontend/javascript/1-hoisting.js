// // Type of scope
// // Function scope
// // Block scope: if, for
// Example 1
// var x;
// function foo() {
//   var x;
//   console.log("The value of x is: ", x); // The value of x is:  10
//   x = 10;
// }
// foo();
// console.log("The value of x is: ", x); // Uncaught ReferenceError: x is not defined

// // Example 2 - Basic hoisting
// function foo() {

//   var x ;
//   var y ;
//    x = 10;
//   console.log("The value of x is: ", x); // The value of x is:  10

//   console.log("The value of y outside but before block scope is: ", y); // The value of x is:  10

//   if (true) {
//     y = 20;
//     console.log("The value of x inside block scope is: ", x); // The value of x is:  10
//     console.log("The value of y inside block scope is: ", y); // The value of x is:  10
//   }
//   console.log("The value of y outside block scope is: ", y); // The value of x is:  10
// }
// foo();

// function foo() {
//   var x;
//   x = 10;
//   console.log("The value of x is: ", x); // The value of x is:  10

//   innerFoo();
//   // console.log("The value of y outside but before block scope is: ", y); // The value of x is:  10
//   function innerFoo() {
//     var y;
//     if (true) {
//       var y = 20;
//       console.log("The value of x inside block scope is: ", x); // The value of x is:  10
//       console.log("The value of y inside block scope is: ", y); // The value of x is:  10
//     }
//     console.log("The value of y outside block scope is: ", y); // The value of x is:  10
//   }
//   console.log("The value of y outside innerFoo scope is: ", y); // Uncaught ReferenceError: y is not defined
// }
// foo();

// function foo() {
//   let x;
//   console.log("The value of x is: ", x); // The value of x is:  10
// }
// foo();
// console.log("The value of x is: ", x); // Uncaught ReferenceError: x is not defined

// function foo() {
//   // console.log("The value of x is: ", x);
//   if (true) {
//     console.log("The value of x inside block scope is: ", x);
//     var x = 10;
//   }

//   // console.log("The value of x is: ", x); // The value of x is:  10
// }
// foo();
// console.log("The value of x is: ", x); // Uncaught ReferenceError: x is not defined

// // Example 2 - Basic hoisting
// function foo() {
//   let x = 10;
//   console.log("The value of x is: ", x); // The value of x is:  10

//   console.log("The value of y outside but before block scope is: ", y); // The value of x is:  10

//   if (true) {
//     let y = 20;
//     console.log("The value of x inside block scope is: ", x); // The value of x is:  10
//     console.log("The value of y inside block scope is: ", y); // The value of x is:  10
//   }
//   console.log("The value of y outside block scope is: ", y); // The value of x is:  10
// }
// foo();

// Function hositing examples
// foo();
// function foo() {
//   console.log("Inside foo function");
// }

// // Functional expressions
// foo();
// var foo = function () {
//   console.log("Inside foo function");
// };

// // Functional expressions - Run time behavior
// var foo;
// foo();
// foo = function () {
//   console.log("Inside foo function");
// };

// Hoisting with const
function foo() {
  // console.log("The value of x before block is: ", x); // The value of x is:  10

  if (true) {
    const x = 10;
    console.log("The value of x inside block  is: ", x); // The value of x is:  10
  }
  console.log("The value of x after block is: ", x); // The value of x is:  10
}
foo();
