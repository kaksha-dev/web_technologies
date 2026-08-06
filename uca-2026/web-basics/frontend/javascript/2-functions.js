// function foo() {
//   console.log("Inside the function");
// }
// foo();

// // Function Expression - 1
// var foo = function () {
//   console.log("Inside the function");
// };

// // Function Expression - 2
// let foo = function () {
//   console.log("Inside the function");
// };

// Arrow function - Named function
// Use function expression - In case it needs be defined and use later on as a named function
// const foo = () => {
//   console.log("Inside the function");
// };
// foo();

// Arrow function - anonymous function
() => {
  console.log("Inside the function");
};

// Arrow function - anonymous self invoking function
// (() => {
//   console.log("Inside the self invoking function");
// })();

// Arrow function - anonymous function
// Use case
// - inline function that is not re-usable

// Generator Functions
// Use * in front of function keyword to define a generator function
// Use yield keyword to return a value from the generator function
// Use return to return a value from the generator function and terminate the generator function
// When we call the function for the first time, it will return an generator object
function* foo(initialValue) {
  console.log("Inside the generator start with initialValue", initialValue);
  const x1 = yield 1;
  console.log("Inside the generator after yield x1", x1);
  const x2 = yield 2;
  console.log("Inside the generator after yield x2", x2);
  const x3 = yield 3;
  console.log("Inside the generator after yield x3", x3);
  return 4;
}

//
var generator = foo(100);

function* sumGenerator(initialValue) {
  let sum = initialValue;

  while (true) {
    const x = yield sum;
    if (typeof x === "number") {
      // do maths
    } else {
    }
    sum = sum + x;
  }
}

const sumGen = sumGenerator(0);
sumGen.next();
