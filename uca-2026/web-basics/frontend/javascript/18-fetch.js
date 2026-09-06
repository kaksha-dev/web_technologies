// fetch
const fetchRequestObject = fetch("http://localhost:5000/");

let successR;
fetchRequestObject.then((successResponse) => {
  console.log("successResponse is: ", successResponse);
  successR = successResponse;
});

fetchRequestObject.catch((errorResponse) => {
  console.log("errorResponse is: ", errorResponse);
});

console.log("fetchRequestObject is: ", fetchRequestObject);

const fetchRequestObjectPost = fetch("http://localhost:5000/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "",
  },
  body: {
    username: "name1",
  },
});

let responseO;
let successJSON;
const fetchRequest = fetch("https://dummyjson.com/products/1").then(
  (response) => {
    responseO = response;
    successJSON = response.json();
    return successJSON;
  },
);

// Custom fetch implementaion
// fetch - return

function fetchCustom(url, options) {
  return new Promise(executorFunction);

  function executorFunction(resolve, reject) {
    // should make the api calls and return promise
    const xhr1 = new XMLHttpRequest();
    // allocate memory and store the reference in the variable
    // xhr.open("Type", "URL", "isAsync")
    xhr1.open("GET", url);
    xhr1.send();

    xhr1.onreadystatechange = function () {
      if (xhr1.readyState === "4") {
        let response = xhr1.response;
        if (xhr1.status === "200") resolve(response);
        else reject(response);
      }
    };
  }
}

const responsePromise = fetchCustom("https://dummyjson.com/products/1");
responsePromise.then((success) => {});
responsePromise.catch((error) => {});

// Cancel a fetch request

const abortController = new AbortController();
fetch("http://localhost:5000/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "",
  },
  body: {
    username: "name1",
  },
  signal: abortController.signal,
});

abortController.abort();
fetch("http://localhost:5000/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "",
  },
  body: {
    username: "name1",
  },
  signal: AbortSignal.timeout(5000),
});
