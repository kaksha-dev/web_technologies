// Object Literal
var objUsingLiteral1 = { name: "name1" }; 

// new Object
var objUsingNewObject1 = new Object({ name: "name1" }); 

// Object.assign
var objUsingAssign1 = Object.assign({ college: "Chirkara" }, obj2); 

// Object.assign
var obj4 = Object.assign({ name: "newName" }, obj2); 

// Object.create - Here obj4 actis as prototype objUsingCreate1
var objUsingCreate1 = Object.create(obj4);

// Constructor functions - Covered in 8-constructor-functions.js
// Classes - Covered in 9-classes.js