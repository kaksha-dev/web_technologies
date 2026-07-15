function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
console.log("Before sleep");
sleep(3000);
console.log("After sleep");
sleep(2000)

function sleep(ms) {
  // return new Promise((resolve) => setTimeout(resolve, ms));
    return new Promise((resolve) => {return 100});

}

var someVariable = 20;
// do somthing else


stack, heap, queue
// Stack
Step1 : console.log("Before sleep"); // ecuectes and stack is empty again
Step2: sleep(3000) // new Promise((resolve) => setTimeout(resolve, ms)); // pop out immediately and stack is empty again
Step3: console.log("After sleep");
Step4: sleep(2000) // new Promise((resolve) => setTimeout(resolve, ms)); // pop out immediately and stack is empty again

// Browser APIs
  - fetch
  - Promise - new Promise((resolve) => setTimeout(resolve, ms))
  - DOMevents
  - setTimeout - setTimeout(resolve, ms)


  sleep(2000)
  sleep(3000)

// Queue
  // - Macrotask queue - setTimeout, DOM events, XMLHttpRequest
  // - Microtask queue - Promise, fetch, then, catch, finally


  // promise - call an api and pass the result to a function function(value) {return value}

// -- Mirotask queue

// function2000(value) {return value}
// function3000(value) {return value}


// Stack - Stage 2
  sleep(2000)
  sleep(3000)

  // Stack - Stage 3
  // function2000(value) {return value}; // executed and popped out
  sleep(2000)
  sleep(3000)

// Stack - Stage 4
  // function3000(value) {setTimeout(() => {return value}, 3000)}
  sleep(3000)
// Stack - Stage 4
// empty stack
// -----------------------------------------------
// Stack - Stage 3 - Exeuction in details
  setTimeout(() => {return value}, 3000) // Taken by the browser api
  function3000(value)
  sleep(3000)
// -----------------------------------------------

// Stack - Stage 3 - Exeuction in details
  console.log(value)
  // function3000(value) {console.log(value)}
  sleep(3000)
// -----------------------------------------------



// fetch("https://getSomedatafromServer.com/get") - This is perfromaned by BrowserAPIs
//  results of fetch function fetch("https://getSomedatafromServer.com/get").then(retunvalue => {console.log(returbValue)})
//  is this retunvalue => {console.log(returbValue) and is moved to queue

// setTimeout(foo, 2000) - Job of waiting for 2000 secinds is perfoermed by Browserap
// foo is passed to the Macrotask queue


// Boolean operation || - return first true/nonfalse values
// false values: 0, undefined, null, NaN, "", false