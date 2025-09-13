// Square brackets
var reg1 = /[xyz]/;
console.log(reg1.test("x")); // true
console.log(reg1.test("xyz")); // true
console.log(reg1.test("x123")); // true
console.log(reg1.test("at")); // false

// Square brackets with range
reg1 = /[x-z]/;
console.log(reg1.test("xyz")); // true
reg1 = /[1-4]/;
console.log(reg1.test("4")); // true
console.log(reg1.test("5")); // false

// Square brackets with negation
reg1 = /[^1-4]/;
console.log(reg1.test(4)); // false
console.log(reg1.test("5")); // true

// Square brackets with alphanumeric
reg1 = /[x2]/;
console.log(reg1.test(2)); // true