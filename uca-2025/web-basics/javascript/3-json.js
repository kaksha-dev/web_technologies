// JSON
var studentObject1 = {
  firstName: "fName",
  lastName: "lname",
  rollno: 1236544,
  collegeName: "Chitkara University",
};

// XML
{/* <student>
  <firstName>fName</firstName>
  <lastName>lname</lastName>
  <rollno>1236544</rollno>
  <collegeName>Chitkara University</collegeName>
</student> */}

JSON.stringify(studentObject1);

var studentObject1String = JSON.stringify(studentObject1);
JSON.parse(studentObject1String);
