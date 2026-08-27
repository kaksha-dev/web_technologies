// function declaration
multiplyBy2(5); // supports hoisting
function multiplyBy2() {
  return item * 2;
}

// arrow functions
const multiplyBy2Arrow = (item) => {
  // this
  return item * 2;
};

// const multiplyBy2ArrowV2 = (item) => item * 2;

function outerFunction() {
  console.log(this); // refers to the object that called the functio
  this.normalFunction = function () {
    console.log(this); // obj1
    function innerFunctionNormal() {
      console.log("this inside normal inner function: ", this); // Window object
    }
    innerFunctionNormal();
  };
  this.arrowFunction = () => {
    console.log(this); // refers to the parent context // obj1
    const innerFunctionArrow = () => {
      console.log("this inside arrow inner function: ", this); // obj1
    };
    innerFunctionArrow();
  };
}

const obj1 = new outerFunction();

obj1.normalFunction();
obj1.arrowFunction();

// Arrow function
const arrowFoo1 = (name, age) => {
  console.log("arg1", name);
  console.log("arg2", age);
};
// vs function declarataion
function foo1(name, age) {
  console.log("arg1", arguments[0]);
  console.log("arg2", arguments[1]);
}
