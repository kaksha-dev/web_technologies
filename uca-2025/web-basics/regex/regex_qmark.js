var reg1 = /ha?t/;

console.log(reg1.test("ht")); // true - as 0 occurance of a 
console.log(reg1.test("hat")); // true - as 1 occurance of a 
console.log(reg1.test("haat")); // false - as more than 1 occurance of a 
console.log(reg1.test("hata")); // false - as more than 1 occurance of a 
console.log(reg1.test("hbt"));  // false - as 0 occurance of a