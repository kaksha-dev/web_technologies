// Based on understanding of
// -- prototypical inheritance,
// -- constructor functions
// -- this keyword inside constructor functions

var arr1 = new Array(...[1, 2, 3, 4]);

// var arr1X2 = arr1.map((item) => {
//   return item * 2;
// });

var arr1X2 = arr1.map(callbackMultiplyBy2);

function callbackMultiplyBy2(item) {
  return item * 2;
}
var arr5 = [1, 2, 3, 4, 5];
var arr10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr5.customMap(callbackMultiplyBy2);
arr10.customMap(callbackMultiplyBy2);

Array.prototype.customMap = function (callback) {
  console.log(this);
  let returnArray = [];
  for (let i = 0; i < this.length; i++) {
    let callbackValue = callback(this[i]);
    returnArray.push(callbackValue);
  }
  return returnArray;
};

Array.prototype.forEachCustom = function (callback) {
  console.log(this);
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

Array.prototype.lengthCustom = function (callback) {
  return this.length;
};
