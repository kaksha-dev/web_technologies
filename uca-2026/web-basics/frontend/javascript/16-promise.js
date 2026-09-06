// Promise is a constructor function
// Promise object has 2 value:
//  - state (pending, fullfilled, rejected)
//  - value

const callbackFn = (resolve, reject) => {
  console.log("Inside promise exuector function!");
  const promiseSuccess = true;
  if (promiseSuccess) resolve("successValue");
  if (!promiseSuccess) reject("rejectValue");
};

const executorFn = (resolveFn, rejectFn) => {
  console.log("Inside promise executor function!");
  const promiseSuccess = false;
  setTimeout(() => {
    if (promiseSuccess) resolveFn("successValue");
    if (!promiseSuccess) rejectFn("rejectValue");
    console.log("After reject");
  }, 5000);
};

try {
  const promise1 = new Promise(executorFn);

  promise1.then((value) => {
    console.log("Success value is: ", value);
  });
  promise1.catch((value) => {
    console.log("Error value is: ", value);
  });
} catch (error) {
  console.log("Inside catch block");
}

// const promise2 = new Promise(executerFunction);
