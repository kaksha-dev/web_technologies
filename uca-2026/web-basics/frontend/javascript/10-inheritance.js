const arr1 = new Array(1, 2, 3, 4);

const multiply2 = (item) => {
  return item * 2;
};

arr1.map(multiply2);

// array map function will call the multiply2 function "n" times where n is the length of the array with array item as argumet.
// In this case, it will call the multiply2 function 4 times since the length of the array is 4.
arr1.map(multiply2);

// Implement a custom map (customMap) function on the Array constructor's prototype.
// This will beave same as inbuilt map function but we will implement it from scratch just for better understanding of how it works.Array.prototype.customMap = function() {}

Array.prototype.customMap = function (callbackfn) {
  console.log(this);
  let returnArr = [];
  for (let i = 0; i < this.length; i++) {
    let result = callbackfn(this[i], i, this);
    returnArr.push(result);
  }
  return returnArr;
};

arr1.customMap(multiply2);

// Try to implement the customForEach function as an exercise
