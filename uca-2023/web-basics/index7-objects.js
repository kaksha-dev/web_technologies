var maxMarks = 1000;

var studentObject1 = {
  firstName: "fName",
  lastName: "lname",
  rollno: 1236544,
  collegeName: "Chitkara University",
  obtainedMarks: 500,
  checkResults: () => {
    let percentage = (studentObject1.obtainedMarks * 100) / maxMarks;
    console.log("The percentage is: ", percentage);
    if (percentage > 40) {
      console.log();
      return "pass";
    } else return "fail";
  },
};

function student(firstName, lastname, rollno, collegeName, obtainedMarks) {
  this.firstName = firstName;
  this.lastname = lastname;
  this.rollno = rollno;
  this.collegeName = collegeName;
  this.obtainedMarks = obtainedMarks;

  this.checkResults = function () {
    console.log("The first name is: ", this.firstName);
    let percentage = (this.obtainedMarks * 100) / maxMarks;
    console.log("The percentage is: ", percentage);
    if (percentage > 40) {
      console.log("The result is pass");
      return "pass";
    } else {
      console.log("The result is fail");
      return "fail";
    }
  };
}

let studentObjectC1 = new student("fNameValue1", "lNameValue", 100, "ch", 200);
let studentObjectC2 = new student("fNameValue2", "lNameValue2", 200, "ch", 500);
studentObjectC1.checkResults();
studentObjectC2.checkResults();
