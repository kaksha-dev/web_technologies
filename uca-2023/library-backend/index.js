var express = require("express");
var app = express();
var path = require("path");

const authentication = require("./utils/auth");

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
const usersRoute = require("./routes/users");

const port = 3001;

//  All the Middlewares
app.use(express.json());
// Route handlers
// app.get("/", function (request, response) {
//   response.send("Hello world with root path");
// });

// app.use("/", express.static("build"));
app.use(
  "/",
  express.static(path.join(__dirname, "build"), {
    setHeaders: (response, path) => {
      console.log(path);
      response.setHeader("Cache-Control", "public,max-age=3600000,immutable");
      response.setHeader("Expires", "public,max-age=3600000,immutable");
    },
  })
);

app.use("*", function (req, res, next) {
  console.log("Custom middleare is called");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Expose-Headers", "token");
  next();
});

app.options("*", function (request, response) {
  console.log("Sending the response of the options request");
  response.send("");
});

app.use("/users", usersRoute);

app.use("*", function (req, res, next) {
  // Authenticating the user
  authentication.authenticateRequest(req, res, next);
});

app.use("/books", booksRoute);

app.listen(port, function () {
  console.log(`App listening on port ${port}`);
});

// Deploy the front end code on Nodejs
// - so no CORS error will be there - But this not preferreable
// app.post
// app.put
// app.delete
