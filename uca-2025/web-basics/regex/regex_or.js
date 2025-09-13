// Dot
var reg1 = /h|t/;

console.log(reg1.test("h")); //true
console.log(reg1.test("t")); //true

reg1 = /ha|bt/;
console.log(reg1.test("hat")); //true
console.log(reg1.test("hbt")); //true
console.log(reg1.test("habt")); //true
console.log(reg1.test("hacat")); //true
console.log(reg1.test("hcat")); //false
