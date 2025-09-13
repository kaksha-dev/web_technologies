// Dot
var reg1 = /./;

console.log(reg1.test("h")); //true
console.log(reg1.test("ht")); //true

reg1 = /../;
console.log(reg1.test("h")); //false
console.log(reg1.test("ht")); //true
console.log(reg1.test("htcfd")); //true

reg1 = /h..t/;
console.log(reg1.test("h")); //false
console.log(reg1.test("hct")); //false
console.log(reg1.test("hcdt")); //true
console.log(reg1.test("htcfd")); //false



