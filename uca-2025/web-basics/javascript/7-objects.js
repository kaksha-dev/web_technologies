// Object Literal
var objUsingLiteral1 = { name: "name1" }; 

// new Object
var objUsingNewObject1 = new Object({ name: "name1" }); 

// Object.assign
var objUsingAssign1 = Object.assign({ college: "Chitkara" }, obj2); 
var objUsingAssign2 = Object.assign(obj2, { college: "Chitkara" } ); 

// Object.assign
var obj4 = Object.assign({ name: "newName" }, obj2); 

// Object.create - Here obj4 actis as prototype objUsingCreate1
var objUsingCreate1 = Object.create(obj4);

// Actual new objects are created when:
// - {} is used
// - ... Spread operator is used