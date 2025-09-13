// Dot
var reg1 = /^h/;

console.log(reg1.test("h")); // true
console.log(reg1.test("ht1")); // true
console.log(reg1.test("th1"));  // false

// Dollar
reg1 = /h$/

console.log(reg1.test("h")); // true
console.log(reg1.test("ht1")); // false
console.log(reg1.test("th1h")); // true
