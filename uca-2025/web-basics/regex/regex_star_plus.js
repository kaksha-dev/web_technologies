// Dot

// The character/expression(if expression before *) becomes optional in the provided regex

var reg1 = /ha*t/;

console.log(reg1.test("ht")); // true - 0 occurance of a 
console.log(reg1.test("hat")); // true - 1 occurance of a 
console.log(reg1.test("haat")); // true - More than 1 occurance of a 

console.log(reg1.test("hbt")); // false - 0 occurance of a which is ok but fails as "b" cannot be there as not present in pattern

// --------------------------------------------------------------------
// Plus

// The character/expression(if expression before *) just before plus must have atleast one occrance

reg1 = /ma+n/;

console.log(reg1.test("ht")); // false - as 0 occurance of a 
console.log(reg1.test("hat")); // true - 1 occurance of a 
console.log(reg1.test("haat")); // true - More than 1 occurance of a 

console.log(reg1.test("hbt")); // false - 0 occurance of a which is ok but fails as "b" cannot be there as not present in pattern


// 
reg1 = /a+/
console.log(reg1.test("bbc"))