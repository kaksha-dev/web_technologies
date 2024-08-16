// for loop
// for loop with break
// for loop with continue
// for in loop with continue
// for in loop for objects
// for of loop for Arrays
// forEach: does not support contnue and break. But continue can be acheived thorugh return
// map

var numArray1 = [9, 8, 7, 6, 5];

// for loop
for (let i = 0; i < numArray1.length; i++) {
  console.log(`The value is : ${i}`);
}

// for loop with break
for (let i = 0; i < numArray1.length; i++) {
  if (i === 3) break;
  console.log(`The value is : ${i}`);
}

// for loop with continue
for (let i = 0; i < numArray1.length; i++) {
  if (i === 3) continue;
  console.log(`The value is : ${i}`);
}

// for in loop with continue
for (let i in numArray1) {
  if (numArray1[i] === 7) continue;
  console.log(`The value is : ${numArray1[i]}`);
}

var studentObject1 = {
  firstName: "fName",
  lastName: "lname",
  rollno: 1236544,
  collegeName: "Chitkara University",
};

// for in loop for objects
for (let i in studentObject1) {
  console.log(`The value is : ${studentObject1[i]}`);
}

// for of loop for Arrays
for (let numArrayItem of numArray1) {
  if (numArrayItem === 7) continue;
  console.log(`The value is : ${numArrayItem}`);
}

var actualFunction = function (value) {
  console.log(`The value is: ${value}`);
};

// numArray1.forEach(callbackFunction(value));
numArray1.forEach(function (value, index, numArray1) {
  if (value === "8") return;
  console.log(`The value is: ${value}`);
  //   console.log(`The index is: ${index}`);
  //   console.log(`The array is: ${numArray1}`);
});

// numArray1.forEach(callbackFunction(value));
numArray1.forEach(actualFunction(value));

// calback anonymous function
numArray1.forEach((value) => {
  console.log(`The value is: ${value}`);
});

numArray1.map((value) => {
  if (value === 8) {
  } else return value * 2;
});
