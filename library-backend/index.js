var express = require("express");
var app = express();
require("./config/dbconnection");

// mongoose
//   .connect("mongodb://127.0.0.1:27018/test")
//   .then((success) => {
//     console.log(success);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const booksRoute = require("./routes/books");

const port = 3001;

//  All the Middlewares
app.use(express.json());
// Route handlers
app.get("/", function (request, response) {
  response.send("Hello world with root path");
});

app.use("*", function (req, res, next) {
  console.log("Custom middleare is called");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  next();
});

app.use("/books", booksRoute);

app.options("*", function (request, response) {
  console.log("Sending the response of the options request");
  response.send("");
});

app.listen(port, function () {
  console.log(`App listening on port ${port}`);
});

// Deploy the front end code on Nodejs
// - so no CORS error will be there - But this not preferreable
// app.post
// app.put
// app.delete
