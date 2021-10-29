var express = require("express");
var app = express();

const port = 5000;

app.get("/", function (request, response) {
  console.log(request);
  response.send("Hello world with root path");
});

app.get("/path1", function (request, response) {
  response.send("Hello world with path 1");
});

app.listen(port, function () {
  console.log(`App listening on port ${port}`);
});
