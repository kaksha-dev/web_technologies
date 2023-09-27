// convert object to function
var maxMarks = 3000;
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
  new student("First Name5", 300),
];

function getAllRows(students) {
  var dataRows = students.map((item) => {
    return `
        <tr>
        <td>${item.name}</td>
        <td>${item.obtainedMarks}</td>
        <td id="bold">${item.checkResult().toUpperCase()}</td>
      </tr>`;
  });
  return dataRows.join("");
}

function sort() {
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
    <th>Result</th>
  </tr>
  ${getAllRows(studentsData)}
</table>`;
}

renderData(students);

const gotoResponsivePage = () => {
  window.location.href = "/responsive.html?a=true";
};