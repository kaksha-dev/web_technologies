var arr1 = [1, "Amit", "Garg", { name: "name1", age: 20 }];

var [count, fName, lName, details] = arr1;

var obj1 = {
  fName: "name1",
  lName: "",
  details: { age: 10, college: "college1" },
};

// obj1.fName;
let {lName, fName} = obj1
