fetch("www.google.com");

var x = fetch("http://localhost:8080/data");

x.then((response) => {
  console.log("Response is : ", response);
});

// xmlHTTPRequest
// We want to see Promise use cases / examples
// The primary use case of Promise is to handle asynchronous operations
// One of the most common asynchronous operation in web development is making network requests
// The network request are bsically made to fetch some data from servers
// We will see how XMLHttpRequest constructor function is usded to make network requests and "fetch" custom implememtation using this XMLHttpRequest

var xmlHTTPRequest1 = new XMLHttpRequest();
xmlHTTPRequest1.open("GET", "http://localhost:8080/data");
xmlHTTPRequest1.send();

xmlHTTPRequest1.onreadystatechange = function () {
  if (xmlHTTPRequest1.readyState === 4) {
    console.log("Response received from server is: ", xmlHTTPRequest1.response);
  }
};

// Implementing custom fetch using XMLHttpRequest
// Accepts a URL
// Returns a Promise
// The promise is resolved when the data is fetched from the server

function customFetch(url) {
  // return Promise;
  return new Promise(executorFunc);

  function executorFunc(resolve, reject) {
    var xmlHTTPRequest1 = new XMLHttpRequest();
    xmlHTTPRequest1.open("GET", url);
    xmlHTTPRequest1.send();

    xmlHTTPRequest1.onreadystatechange = function () {
      if (xmlHTTPRequest1.readyState === 4) {
        console.log(
          "Response received from server is: ",
          xmlHTTPRequest1.response
        );
        resolve(xmlHTTPRequest1.response);
      }
    };
  }
}

var data = customFetch("http://localhost:8080/data");

data.then((response) => {
  console.log("Response from custom fetch is: ", response);
}); 
