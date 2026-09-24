function foo(number) {
  // parent component
  // Do something here
  let val1;
  let callBackFunction1 = (arg) => {
    console.log("callBackFunction1 input: ", arg1);
    val1 = arg1;
  };
  let callBackFunction2 = (arg) => {
    console.log("callBackFunction2 input: ", arg1);
  };

  const result = fooInner(number, callBackFunction1, callBackFunction2); // child component
  console.log("result in foo function is: ", result);
}

function fooInner(value, callBackFunctionParam1, callBackFunctionParam2) {
  //   let multiplyParam = 2;
  //   if (param2) multiplyParam = param2;
  //   value = 24;

  //   return value * multiplyParam;
  callBackFunctionParam1("some value");
  callBackFunctionParam2("another value");
  return value * 2;
}

foo(25);

// Mutation is ability to change the state of an object or anything else
let nameObject = {
  firstName: "fName",
  lastName: "lName",
};
nameObject.firstName = "fName Modfied";
