// Constructor functions
// this keyword
// prototype inheritnace

// Without behavior
function constructStudent(name, age, email, marks) {
  this.name = name;
  this.age = age;
  this.email = email;
  this.marks = marks;
}

// With behavior
// Prootype chains and Prototype Inheritance
function constructStudentWB(name, age, email, marks) {
  this.name = name;
  this.age = age;
  this.email = email;
  this.marks = marks;
}

constructStudentWB.prototype.percentage = function() {
  return (this.marks / 1000) * 100;
}
const student1 = new constructStudentWB("Name3", 20, "name3@gmail.com", 80);
const student2 = new constructStudentWB("Name4", 22, "name4@gmail.com", 90);

const student1 = new constructStudent("Name3", 20, "name3@gmail.com", 80);
const student2 = new constructStudent("Name4", 22, "name4@gmail.com", 90);

(student1.__proto__ === student1.__proto__) === constructStudent.prototype; // true