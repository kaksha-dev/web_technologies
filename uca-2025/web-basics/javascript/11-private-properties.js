// Private props and methods in class
// Private
// Private static
// Public
// Public static
// Getter and Setter

var maxMarks = 1000;
class Student {
  #fName;
  constructor(fName, obtainedMarks) {
    this.#fName = fName;
    this.obtainedMarks = obtainedMarks;
  }

  checkResult() {
    let percentage = (this.obtainedMarks / maxMarks) * 100;
    if (percentage > 40) {
      return percentage;
    } else {
      return percentage;
    }
  }
  
  getName() {
      return this.#fName
  }
}

var student1 = new Student("name1", 450)
console.log(student1)


class StudentWithPAndNPFields {
  static firstName = 1;
  lastName;

  constructor(obtainedmarks, firstName) {
    this.obtmarks = obtainedmarks;
    this.firstName = "Joe";
    this.lastName = "Harry";
    StudentWithPAndNPFields.firstName++;
  }

  checkresults() {
    let percentage = this.obtmarks / 5;
    if (percentage >= 40) {
      return "pass";
    } else {
      return "fail";
    }
  }
}

var student1 = new Student(400);
// student1.#firstName;