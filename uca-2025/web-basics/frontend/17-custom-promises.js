// var promise1 = new Promise(promiseExecutor);
// var promise1 = new CustomPromise(promiseExecutor);

//  Simple promise with constructor function
//  Simple promise with resolve and reject
//  Simple promise with additional then and catch methods

function customPromiseExecutorFunc() {
  // Asynchronous operation
  setTimeout(() => {
    console.log("Promise 1 executed");
  }, 5000);
}
// ----------------------------------------------------
function PromiseCustom(executor) {
  this.state = "pending";
  executor();
}
var customPromise1 = new PromiseCustom(customPromiseExecutor);

// Simple promise with resolve and reject
function customPromiseExecutor(resolve, reject) {
  // Asynchronous operation
  setTimeout(() => {
    console.log("Promise 1 executed");
    resolve("Promise 1 resolved");
    // reject("Promise 1 rejected");
  }, 5000);
}

function PromiseCustom(executorFuncArg) {
  this.state = "pending";
  executorFuncArg(
    (responseArg) => {
      this.state = "fulfilled";
    },
    (errorArg) => {
      this.state = "rejected";
    }
  );
}

var customPromise1 = new PromiseCustom(customPromiseExecutor);

// Simple custom promise with then and catch methods

function customPromiseExecutorFunc(resolve, reject) {
  // Asynchronous operation
  setTimeout(() => {
    console.log("Promise 1 executed");

    resolve("Promise 1 resolved");
    // reject("Promise 1 rejected");
  }, 5000);
}

function PromiseCustom(executorFunc) {
  this.state = "pending";
  let successCallback;
  let failureCallback;

  this.then = function (callback) {
    successCallback = callback;
  };
  this.catch = function () {
    failureCallback = callback;
  };

  executorFunc(
    (response) => {
      this.state = "fulfilled";
      successCallback(response);
    },
    (error) => {
      this.state = "rejected";
      failureCallback(error);
    }
  );
}

var customPromise1 = new PromiseCustom(customPromiseExecutorFunc);

customPromise1.then((resolvedReturnValue) => {
  alert("Promise resolved with value: " + resolvedReturnValue);
});

customPromise1.catch((rejectedReturnValue) => {
  alert("Promise rejected with value: " + rejectedReturnValue);
});
