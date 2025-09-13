// Promise

// Promise is an object created using Promise constructor function and primarily have 2 properties
// 1. state - possible values
// -pending
// - fulfilled
// - rejected

// 2. result - possible values
//  - any valid value
//  - undefined

//  Simple promise

function promiseExecutor() {
  // Asynchronous operation
  setTimeout(() => {
    console.log("Promise 1 executed");
  }, 5000);
}

var promise1 = new Promise(promiseExecutor);

// Executor function is called immediately when promise is created
// Executor function is called with 2 arguments - resolve and reject
// resolve and reject are functions
//  Simple promise with resolve and reject
function promiseExecutor(resolve, reject) {
  // Asynchronous operation
  setTimeout(() => {
    console.log("Promise 1 executed");
    resolve("Promise 1 resolved");
    // reject("Promise 1 rejected");
  }, 5000);
}

var promise1 = new Promise(promiseExecutor);

//  Simple promise with additional then and catch methodss
function promiseExecutor(resolve, reject) {
  // Asynchronous operation
  setTimeout(() => {
    console.log("Promise 1 executed");
    resolve("Promise 1 resolved");
    // reject("Promise 1 rejected");
  }, 5000);
}
var promise1 = new Promise(promiseExecutor);

promise1.then((resolvedReturnValue) => {
  alert("Promise resolved with value: " + resolvedReturnValue);
});
promise1.catch((rejectedReturnValue) => {
  alert("Promise rejected with value: " + rejectedReturnValue);
});
