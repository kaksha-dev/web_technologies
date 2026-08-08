// for loop
// for loop with break
// for loop with continue
// for in loop
// for of loop
// map function - iterates over the values of the array and returns a new array
// foreach function - iterates over the values of the array and execute a function for each value
// Array.some
// Array.every
// Array.find
// Array.filter

let numsArray1 = [9, 8, 7, 6, 5];
// for (let i = 0; i < numsArray1.length; i++) {
//   console.log("The value of i is: ", i);
//   console.log("The value at i is: ", numsArray1[i]);
// }

// for loop with break
// for (let i = 0; i < numsArray1.length; i++) {
//   //   console.log("The value of i is: ", i);
//   if (numsArray1[i] < 7) break;
//   console.log("The value at i is: ", numsArray1[i]);
// }

// for loop with contnue
// for (let i = 0; i < numsArray1.length; i++) {
//   //   console.log("The value of i is: ", i);
//   if (numsArray1[i] === 7) continue;
//   console.log("The value at i is: ", numsArray1[i]);
// }

// for in loop - iterates over the keys
let array1 = [9, 8, 7, 6, 5];
const student = {
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com",
};

// Arrays
// for (let key in numsArray1) {
//   console.log("The value at i is: ", numsArray1[key]);
// }

// Objects
// for (let key in student) {
//   console.log("The value at key is: ", student[key]);
// }

// for of loop - iterates over the values of the array
// for (let value of numsArray1) {
//   console.log("The current value is: ", value);
// }

// map function - iterates over the values of the array and returns a new array

// foreach function

// numsArray1.forEach(multiplyBy2CallbackFn);
// function multiplyBy2CallbackFn(value, index, array) {
//   console.log("The evaluated value is: ", value * 2);
// }

// numsArray1.forEach((value, index, array) => {
//   console.log("The evaluated value is: ", value * 2);
// });

// Array.some
// Array.every
// numsArray1.some((item) => {
//     return item % 2 === 0;
// })

// Array.find
// numsArray1.find((item) =>
//     item % 2 === 0
// )
// Array.filter
numsArray1.filter((item) => {
  return item % 2 === 0;
});
