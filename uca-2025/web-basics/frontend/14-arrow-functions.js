function studentFunction(fName, obtainedMarks) {
  console.log(this);
  this.fNameObj = fName;
  this.obtMarksObject = obtainedMarks;

  // Normal Function
  this.checkResultsNormal = function () {
    console.log(this);
    function innerFunction() {
      console.log("Normal Inner function: ", this);
    }
    innerFunction();
  };

  // Arrow Function
  this.checkResultsArrow = () => {
    console.log(this);
    innerFunction = () => {
      console.log("Arrow Inner function: ", this);
    };
    innerFunction();
  };
}
var student1 = new studentArrowFunction("fnameOne", 100);
var student2 = new studentArrowFunction("fnameTwo", 100);