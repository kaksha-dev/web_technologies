function student() {}

var maxMarks = 500;
// ----------------------------------------------------------------------
var student = {
  fName: "fName1",
  obtainedMarks: 200,
  checkResults: function () {
    let percentage = (student.obtainedMarks / maxMarks) * 100;
    if (percentage >= 40) {
      return "pass";
    } else {
      return "fail";
    }
  },
};

student.checkResults();

// ----------------------------------------------------------------------

function student(fName, obtainedMarks) {
  return {
    fName: fName,
    obt: obtainedMarks,
    checkResults: function () {
      let percentage = (obtainedMarks / maxMarks) * 100;
      if (percentage >= 40) {
        return "pass";
      } else {
        return "fail";
      }
    },
  };
}
var student1 = student("fname5", 100);

// ----------------------------------------------------------------------
function student(fName, obtainedMarks) {
  console.log(this); // Window
  return {
    fNameObj: fName,
    obtMarksObject: obtainedMarks,
    checkResults: function () {
      console.log(this); // student1
      let percentage = (this.obtMarksObject / maxMarks) * 100;
      if (percentage >= 40) {
        return "pass";
      } else {
        return "fail";
      }
    },
  };
}
var student1 = student("fname5", 100);

// ----------------------------Constructor functions------------------------------------------
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