// Arithmatic operators
// logical operators
// comparison operators
// assignment operators = += -= *= /=
// typeof operator
// delete operator
// in operator
// instanceof operator
// bitwise operators
// spread operator
// rest operator
// comma operator
// unary operators
// binary operators

// --------------------------------------------------------------------------------------
// conditional (ternary) operator
// optional chaining operator
// nullish coalescing operator
// --------------------------------------------------------------------------------------

// conditional (ternary) operator ? : shorthand of if else
const isLoggedIn = false;
const userName = isLoggedIn ? "John Doe" : "Guest";
console.log("User Name: ", userName); // Output: User Name: Guest

// optional chaining operator ?. to access nested object properties safely
var user2 = {
    "academics" : {
        "college": "collegename",
    } 
}
user2.academics.profile.name // Error: Cannot read properties of undefined (reading 'name')
user2?.academics?.profile?.name // undefined

// nullish coalescing operator ?? to provide default value for null or undefined
var firstName;
var lastName;
var userNameC;
var displayName = firstName ?? lastName;
var displayName = userNameC ?? "Guest User";
var displayName = firstName ?? lastName ?? userNameC ?? "Guest User";