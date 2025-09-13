var studentList = [{ name: "name1", age: 20, college: "college1" }];

var maxMarks = 500;

// Approach 1 -------------------------------------------------
var student1 = {
  fName: "name1",
  obtainedMarks: 500,
  checkResult: function () {
    let percentage = (student1.obtainedMarks / maxMarks) * 100;
    if (percentage > 40) {
      return "pass";
    } else {
      return "fail";
    }
  },
};

student1.checkResult(); // "pass"

// Approach 2 - Using function
function createStudent(fName, obtainedMarks) {
  return {
    fName: fName,
    obtainedMarks: obtainedMarks,
    checkResult: function () {
      let percentage = (this.obtainedMarks / maxMarks) * 100;
      if (percentage > 40) {
        return "pass";
      } else {
        return "fail";
      }
    },
  };
}

var student1 = createStudent("name1", 100);
var student2 = createStudent("name1", 500);

// Approach 2 - Using constructor function

var arr1 = new Array();

var thisInsideCreateStudent;

function student(fName, obtainedMarks) {
  thisInsideCreateStudent = this;
  this.fName = fName;
  this.obtainedMarks = obtainedMarks;
  this.checkResult = function () {
    let percentage = (this.obtainedMarks / maxMarks) * 100;
    if (percentage > 40) {
      return "pass";
    } else {
      return "fail";
    }
  };
}

var student1 = new student("name1", 100);
var student2 = new student("name2", 200);

// Constructor function - Optimized implementation
function student(fName, obtainedMarks) {
  thisInsideCreateStudent = this;
  this.fName = fName;
  this.obtainedMarks = obtainedMarks;
}

student.prototype.checkResult = function () {
  let percentage = (this.obtainedMarks / maxMarks) * 100;
  if (percentage > 40) {
    return "pass";
  } else {
    return "fail";
  }
};

var student1 = new student("name1", 100);
var student2 = new student("name2", 200);

// Whenevr JS encounters new keyword, it created a new object. Bind the this keyword to that new object