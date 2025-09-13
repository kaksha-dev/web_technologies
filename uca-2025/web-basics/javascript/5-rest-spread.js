// Spread Operator
var num1 = [1, 2, 3, 4];
var num2 = [5, 6, 7, 8];

var combinerArray = [...num1, ...num2];

var arr1 = new Array(...[1, 2, 3, 4]);
var arr2 = new Array(1, 2, 3, 4);

var studentObjDetail1 = { name: "name1", age: 20 };
var studentObjDetail2 = { rollno: 10000025, marks: 900 };

var studentObjDetails = { ...studentObjDetail1, ...studentObjDetail2 };

// Rest Operator for Arrays
sumAll(1, 2);
sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
function sumAll(...items) {
  let sum = 0;
  for (let i = 0; i < items.length; i++) {
    sum = sum + items[i];
  }
  return sum;
}

// Rest Operator for object
var studentDetails = { name: "name1", age: 20, college: "college1" };

var { name, ...details } = studentList;

function getProperties({ name, ...details }) {
  console.log("name is: ", name);
  console.log("details is: ", details);
}

getProperties(studentDetails);

