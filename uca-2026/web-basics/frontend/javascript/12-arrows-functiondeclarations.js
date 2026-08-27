// Difference between function declaration and arrow function declaration
// 1. Hoisting: Function declarations are hoisted, meaning they can be called before they are defined in the code. Arrow functions, on the other hand, are not hoisted and must be defined before they are called.
// 2. Syntax: Function declarations use the function keyword, while arrow functions use the => syntax. Arrow functions can also have a more concise syntax for single-line functions.
// 3. In a normal function declaration, the this keyword refers to the object that called the function 
// but In an arrow function, this keyword is inherited from the parent context
// Arrow function cannot be called with a new keyword
// Function declarations have access to a default arguments but it's not accessible
// in arrow function