// new keywod to be used with a function
function student(fName, obtainedMarks) {
  console.log(this);
  this.fNameObj = fName;
  this.obtMarksObject = obtainedMarks;
  this.checkResults = function () {
    console.log(this);
    let percentage = (this.obtMarksObject / maxMarks) * 100;
    if (percentage >= 40) {
      return "pass";
    } else {
      return "fail";
    }
  };
}

var student1 = new student("fname5", 100);
// ----------------------------------------------------------------------
class Student {
  constructor(fName, obtainedMarks) {
    this.fNameObj = fName;
    this.obtMarksObject = obtainedMarks;
  }

  checkResults() {
    let percentage = (this.obtMarksObject / maxMarks) * 100;
    if (percentage >= 40) {
      return "pass";
    } else {
      return "fail";
    }
  }
}

var student1 = new Student("fname5", 100);
