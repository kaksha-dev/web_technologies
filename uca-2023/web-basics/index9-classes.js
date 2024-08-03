var maxMarks = 200;
function student(firstName, obtainedMarks) {
  this.name = firstName;
  this.obtainedMarks = obtainedMarks;
}

let stu1 = new Student("name1", 100);
console.log("The student is: ", stu1);

class StudentClass {
  constructor(firstName, obtainedMarks) {
    this.name = firstName;
    this.obtainedMarks = obtainedMarks;
  }
}
let stu2 = new StudentClass("name1", 100);
console.log("The student is: ", stu2);
