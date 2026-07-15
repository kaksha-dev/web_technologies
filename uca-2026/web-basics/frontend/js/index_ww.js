// Browser API code - NO
console.log("Code before the Web workers code"); // isBrowserAPICode : Yes
window.alert("Hello from the web worker thread!"); // isBrowserAPICode : Yes

// Browser API code - Yes - belongs to Web Worker
const webWorker1 = new Worker("./js/worker.js"); // isBrowserAPICode : Yes

webWorker1.postMessage(2000000000); // isBrowserAPICode : Yes
webWorker1.onmessage = function (event) {
  // isBrowserAPICode : No
  //   document.getElementById("datafromworker").innerHTML =
  //     "Data from worker thread: " + event.data;
};

// Browser API code - NO
console.log("Code after the Web workers code");
