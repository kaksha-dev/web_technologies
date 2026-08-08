// rest operator - ... => expand an array into individual elements
// spread operator - ...

// Spread operator is used to combine the elements of multiple arrays / objects
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

const studentPersonalDetails = {
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com",
};

const studentAcademicDetails = {
  college: "ABC University",
  age: 40,
};

const studentDetails = { ...studentPersonalDetails, ...studentAcademicDetails };

const studentDetails = { studentPersonalDetails, studentAcademicDetails };
// JS internally interprets this as following:
const studentDetails = {
  studentPersonalDetails: studentPersonalDetails,
  studentAcademicDetails: studentAcademicDetails,
};

// Rest operator
const studentDetails = {
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com",
  college: "ABC University",
};
const { college } = studentDetails;

sum(1, 2);
sum(1, 2, 3);
sum(1, 2, 3, 4);

function sum(...numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum = sum + number;
  }
  return sum;
}
