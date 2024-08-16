// Multiple ways to disclare functions
var name = "some name";

// Function declaration - traditional apporach 1
function foo1(param1) {
  console.log("Inside foo1 functionwith params as: ", param1);
}

// Function declaration - traditional apporach 2
var foo2 = function (param1) {
  console.log("Inside foo3 functionwith params as: ", param1);
};

// Function declaration - traditional apporach 3
var foo3 = (param1) => {
  console.log("Inside foo3 functionwith params as: ", param1);
};

// Function declaration - traditional apporach 4
(param1) => {
  console.log("Inside foo4 functionwith params as: ", param1);
};

// Self invoking functions
((param1) => {
  console.log("Inside foo4 functionwith params as: ", param1);
})();
