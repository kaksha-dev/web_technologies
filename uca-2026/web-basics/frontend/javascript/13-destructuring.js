// Destrucring for objects
const studentDetails = {
  name: "name1",
  age: 20,
  prop3: "p3",
  prop4: "p4",
  prop5: "p5",
};

const { name, age, ...rest1 } = studentDetails;

// This is equivalent to saying as:
// const name = studentDetails.name;
// const age = studentDetails.age;

// Destrucring for arrays
const studentDetailsArray = ["name1", 20, "p1", "p2"];
const [name1, age1, ...rest2] = studentDetailsArray;
