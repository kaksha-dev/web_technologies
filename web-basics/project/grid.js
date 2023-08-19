// convert object to funcation
var student = function (name, obtainedMarks) {
  this.name = name;
  this.obtainedMarks = obtainedMarks;
  this.checkResult = () => {
    if ((this.obtainedMarks * 100) / maxMarks > 40) {
      return "pass";
    } else {
      return "fail";
    }
  };
};

let students = [
  new student("First Name1", 2300),
  new student("First Name2", 6100),
  new student("First Name3", 900),
  new student("First Name4", 2500),
];

function getAllRows(students) {
  var dataRows = students.map((item) => {
    return `
        <tr>
        <td>${item.name}</td>
        <td>${item.obtainedMarks}</td>
      </tr>`;
  });
  return dataRows;
}

function sort() {
  console.log("Sorting");
  var sortedStudents = students.sort(
    (a, b) => a.obtainedMarks - b.obtainedMarks
  );
  renderData(sortedStudents);
}

function renderData(studentsData) {
  document.getElementById("grid").innerHTML = `<table>
  <tr>
    <th>Name</th>
    <th onclick="sort()">Obtained Marks</th>
  </tr>
  ${getAllRows(studentsData)}
</table>`;
}

renderData(students);
