// Object literal
const student1 = {
  name: "John Doe",
  age: 30,
  email: "abc@gmail.com",
};

const student2 = {
  name: "Name2",
  age: 30,
  email: "name2@gmail.com",
};

// Object using create
var obj2 = Object.create(obj1);

// Object using assign is used for merging two objects into one object.
// It takes two parameters, first is the source object and second is the target object.
var obj3 = Object.assign(sourceObj, targetObj);

// Object literal
const student1 = {
  name: "John Doe",
  age: 30,
  email: "abc@gmail.com",
};

const student2 = {
  name: "Name2",
  age: 30,
  email: "name2@gmail.com",
};

// Factory functions
function createStudent(name, age, email, marks) {
  let maxMarks = 100;
  return {
    name: name,
    age: age,
    email: email,
    percentage: function () {
      return (marks / maxMarks) * 100;
    },
  };
}

const student3 = createStudent("Name3", 20, "name3@gmail.com", 80);
const student4 = createStudent("Name4", 22, "name4@gmail.com", 90);

// Constructor functions
// this keyword
// prototype inheritnace

function constructStudent(name, age, email, marks) {
  this.name = name;
  this.age = age;
  this.email = email;
  this.mark = marks;
}

const student1 = new constructStudent("Name3", 20, "name3@gmail.com", 80);
const student2 = new constructStudent("Name4", 22, "name4@gmail.com", 90);
