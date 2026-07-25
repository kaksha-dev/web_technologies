// Some common browser APIs
//   - Network requests
//   - Web workers
//   - Service workers
//   - Web storage
//   - DOM events
//   - setTimeout
//   - setInterval
//   - navigator.geolocation

// Network requests
//  - xmlHTTPRequest   - XHR
//  - fetch

// What does "new" do
// allocate memory
// store the reference of memory location in the variable
// The reference point to "this" keyword inside the class/function(constructor function) definition

// Browser API - Web workers

// Browser API code - NO
console.log("Code before the Web workers code"); // isBrowserAPICode : Yes

// Browser API - Webworker
const webWorker1 = new Worker("./js/worker.js"); // isBrowserAPICode : Yes

webWorker1.postMessage(2000000000); // isBrowserAPICode : Yes
webWorker1.onmessage = function (event) {
  // isBrowserAPICode : No
  document.getElementById("datafromworker").innerHTML =
    "Data from worker thread: " + event.data;
};

// Browser API code - NO
console.log("Code after the Web workers code");

// Bowser API - XMLHttprequest
const xhr1 = new XMLHttpRequest(); // allocate memory and store the reference in the variable
// xhr.open("Type", "URL", "isAsync")
xhr1.open("GET", "http://localhost:5000", false); // true - async, false - sync
// Some other code
let apiResponse;
xhr1.onload = function () {
  apiResponse = xhr1.responseText;
  console.log(xhr1.responseText);
  document.getElementById("datafromxmlrequest").innerHTML =
    "Data from XMLRequest: " + JSON.parse(apiResponse);
};

xhr1.send(); // send the request to the server
