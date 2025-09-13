// Multiple ways to declare functions
var name = "some name";

// Function declaration - traditional apporach 1
function foo1(param1) {
  console.log("Inside foo1 functionwith params as: ", param1);
}

// Function expression
var foo2 = function (param1) {
  console.log("Inside foo3 functionwith params as: ", param1);
};

// Function expression - Arrow function
var foo3 = (param1) => {
  console.log("Inside foo3 functionwith params as: ", param1);
};

// Anonymous function
(param1) => {
  console.log("Inside foo4 functionwith params as: ", param1);
};

// Self invoking functions
((param1) => {
  console.log("Inside foo4 functionwith params as: ", param1);
})();

// Generator function
function* scoreGenerator(initialScore = 0) {
  let currentScore = initialScore;
  while (currentScore < 2) {
    // Yielding the current score and incrementing it
    yield currentScore;
    currentScore++;
  }
  return currentScore; // This will be returned when the generator is done
}
// Using the generator function
const scoreGen = scoreGenerator();
// Getting the first score
scoreGen.next(); // {value: 0, done: false}
scoreGen.next(); // {value: 1, done: false}
scoreGen.next(); // {value: 1, done: true}
scoreGen.next(); // {value: undefined, done: true}

// Function declaration - When declaring - define function paramters (not arguments)
function foo1(param1) {
  console.log("Inside foo1 functionwith params as: ", param1);
}
// When calling any function - Arguments are passed (and not parameters)
foo2(arg1);
