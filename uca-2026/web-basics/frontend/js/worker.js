console.log("Start of code inside the web worker");

// Implememt a heavy processing function
function heavyProcessing(number) {
  console.log("Inside web worker : heavyProcessing");

  let startTime = Date.now();
  let sum = 0;
  for (let i = 0; i < number; i++) {
    sum += i;
  }
  let endTime = Date.now();
  console.log(`Processing time: ${(endTime - startTime) / 1000} secs`);
  self.postMessage(sum); // send the result back to the main thread
  setTimeout(() => {})
}

self.onmessage = function (event) {
  const dataFromMainThread = event.data;
  console.log("data from main thread", dataFromMainThread);
  heavyProcessing(dataFromMainThread);
};
