// Rest and Spread Operators, bot the operatiors are denoted by ...

// Spread
var numArray1 = [9, 8, 7, 6, 5];
var numArray2 = [29, 28, 27, 26, 25];

var studentObject1 = {
  firstName: "fName",
  lastName: "lname",
  rollno: 1236544,
  collegeName: "Chitkara University",
};

var studentObjectName = {
  firstName: "fName",
  lastName: "lname",
};
var studentObjectDetails = {
  rollno: 1236544,
  collegeName: "Chitkara University",
};
// Spread for array
var numArray3 = [...numArray1, ...numArray2];
// Spread for objects
var studentObject = { ...studentObjectName, ...studentObjectDetails };

// Rest for array
function fooSum(item1, item2) {
  let sum = item1 + item2;
  return sum;
}

function fooSum(...items) {
  console.log(items);
}
