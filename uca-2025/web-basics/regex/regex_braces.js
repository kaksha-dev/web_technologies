// Braces
var reg1 = /ha{1,3}t/;

console.log(reg1.test("ht")); //false
console.log(reg1.test("hat")); //true
console.log(reg1.test("haat")); //true
console.log(reg1.test("haaat")); //true
console.log(reg1.test("haaaat")); //false

var reg1 = /a{1,3}/;
console.log(reg1.test("haaaatmaa")); //true
