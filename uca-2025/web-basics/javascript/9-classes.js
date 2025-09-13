// Class in js
// Classes are just the syntactical sugar over the existing prototype-based inheritance 
// and constructor functions in JavaScript.
// Transpiler

/**
 * ES6
 *  Class specifciation
 *   - constructor
 *   - inheritance
 */

// Problem
//   - Frameworks implemented class based approeach much earlier the popular frameworks like react, angular, vue
//  - Browser could not understand class

// Class based approach
class Student {
  constructor(fName, obtainedMarks) {
    this.fName = fName;
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
}

var student1 = new Student("name1", 100);
var student2 = new Student("name2", 200);
