const executorFn = (resolveFn, rejectFn) => {
  console.log("Inside promise executor function!");
  const promiseSuccess = true;
  setTimeout(() => {
    if (promiseSuccess) resolveFn("successValue");
    if (!promiseSuccess) rejectFn("rejectValue");
  }, 5000);
};

function PromiseCustom(executorCBFn) {
  this.state = "pending";
  this.result = "";
  this.then;
  this.catch;

  let successCallBack = (success) => {
    // console.log("Promise resolved with value: ", success);
    // this.result = success;
    this.state = "fulfilled";
  };
  let errorCallBack = (error) => {
    // this.result = error;
    this.state = "rejected";
  };

  this.then = function (successCallBackFn) {
    successCallBack = successCallBackFn;
  };
  
  this.catch = function (errorCallBackFn) {
    errorCallBack = errorCallBackFn;
  };

  executorCBFn(
    (value) => {
      this.state = "fulfilled";
      successCallBack(value);
    },
    (error) => {
      this.state = "rejected";
      errorCallBack(error);
    },
  );
}

const promiseC1 = new PromiseCustom(executorFn);
promiseC1.then((value) => {
  console.log("Success value is: ", value);
});

promiseC1.catch((value) => {
  console.log("Error value is: ", value);
});
