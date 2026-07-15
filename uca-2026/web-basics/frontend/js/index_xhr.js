// xmlHTTPRequest   - XHR
// User for making networks requests to the server
// JSON example - Object literal
// var data = {
//     name: "name"
// }

// Normal JS code
console.log("Code before the Browser API code");

// Borwser API code
const xhr1 = new XMLHttpRequest(); // allocate memory and store the reference in the variable
// xhr.open("Type", "URL", "isAsync")
xhr1.open("GET", "https://dummyjson.com/products/1", false); // true - async, false - sync
// Some other code
let apiResponse;
xhr1.onload = function () {
  apiResponse = xhr1.responseText;
  console.log(xhr1.responseText);
};

xhr1.send(); // send the request to the server
// local server url: http://127.0.0.1:5500/frontend/index.html
// 127.0.0.1 === 0.0.0.1 = localhost
// post: 5500 - Same machine can multiple ports but one ipaddress
// 127.0.0.1:5500 , 127.0.0.1:5200,  127.0.0.1:80,  127.0.0.1:443

// Other JS code
console.log("API Response", apiResponse);

console.log("Code after the Browser API code");
