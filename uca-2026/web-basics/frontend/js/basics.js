// document.getElementById("appcontent").innerHTML = "Content from JavaScript";

// Template literal - Multui line sstring in JavaScript - denoted by ``

document.getElementById("appcontent").innerHTML = `
    <div>
        <h1>Heading of multiline contnet</h2>
        <h2>Dynamic Content ${7 + 18}</h2>
        <p>Multiline contnet</p>
    </div>
`;

// Self Invoking function
// (function foo(input) {
//   console.log("Input params", input);
// })("Hello");

// Arrow function
const foo = (input) => {
  console.log("Input params", input);
};
foo("Hello");

// Array - Map: Is function that accept a callback function as an argument.
// That callback function is executed on each element of the array and the retun value becomes element of new array
let arr1 = [1, 2, 3, 4];
const arr1Multiply2 = arr1.map(multiply2);

// callback function : Passed as an argument to another function
function multiply2(item) {
  return item * 2;
}
// console.log("New array is ", arr1Multiply2);

const arr2Multiply2 = [];
function foo1(callbackFunc) {
  for (let i = 0; i < arr1.length; i++) {
    let returnValue = callbackFunc(arr1[i]);
    arr2Multiply2.push(returnValue);
  }
}
foo1(multiply2);

console.log("New array is ", arr2Multiply2);
