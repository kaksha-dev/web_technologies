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

const callbackFn2 = (resolve, reject) => {
  console.log("Inside promise executor function!");
  const promiseSuccess = true;
  setTimeout(() => {
    if (promiseSuccess) resolve("successValue");
    if (!promiseSuccess) reject("rejectValue");
  }, 5000);
};

const promise1 = new Promise(callbackFn2);
promise1.then((value) => {console.log("Success value: ", value)})
promise1.catch((value) => {console.log("Failed value: ", value)})
