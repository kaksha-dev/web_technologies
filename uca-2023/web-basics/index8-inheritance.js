var arr2 = [3, 4];

var callbackFunction = function (value) {
  let returnValue = value * 2;
  console.log(returnValue);
  return returnValue;
};
// Array.prototype.forEach2 = () => {};
// var callbackFunction = (value) => {
//   console.log(value);
// };

var arr1 = [1, 2, 3, 4];

var foo1 = (value) => {
  console.log(value);
};
// arr1.forEach(foo1);

let forEach2 = function (foo) {
  for (let i = 0; i < this.length; i++) {
    foo(this[i]);
  }
};

Array.prototype.forEach2 = forEach2;
// Array.prototype.forEach2 = Array.prototype.forEach;

// arr1.__proto__.forEach2 = () => {};
arr1.forEach(foo1);
arr2.forEach2(foo1);

// ---------------------
var arr1 = new Array();
