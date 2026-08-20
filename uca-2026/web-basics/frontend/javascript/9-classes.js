// Constructor function for reusability and mamory optimization
function constructStudent(name, age, email, marks) {
  this.name = name;
  this.age = age;
  this.email = email;
  this.marks = marks;
}

constructStudentWB.prototype.percentage = function () {
  return (this.marks / 1000) * 100;
};

const student1 = new constructStudentWB("Name3", 20, "name3@gmail.com", 80);
const student2 = new constructStudentWB("Name4", 22, "name4@gmail.com", 90);

class ConstructStudent {
  constructor(name, age, email, marks) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.marks = marks;
  }

  percentage() {
    return (this.marks / 1000) * 100;
  }
}

const student1 = new ConstructStudent("Name3", 20, "name3@gmail.com", 80);
const student2 = new ConstructStudent("Name4", 22, "name4@gmail.com", 90);
