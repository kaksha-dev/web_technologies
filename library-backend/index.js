var express = require("express");
var app = express();

const port = 3001;

const books = [
  {
    name: "BDOneNameModified",
    authorName: "BDOneAuthorNameModified",
    id: 0,
  },
  {
    id: 1,
    name: "BTwoName",
    authorName: "BTwoAuthorName",
  },
  {
    id: 2,
    name: "BThreeName",
    authorName: "BThreeAuthorName",
  },
  {
    name: "BDOneName",
    authorName: "BDOneAuthorName",
    id: 3,
  },
];
let latestId = 4;
app.use(express.json());

app.get("/", function (request, response) {
  response.send("Hello world with root path");
});

app.get("/books", function (request, response) {
  // response.send("Write some logic here to provide the list of books");
  console.log("Sending the response of the get request");
  response.header("Access-Control-Allow-Origin", "http://localhost:3000");
  response.send(books);
});

app.options("*", function (request, response) {
  console.log("Sending the response of the post request");
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "*");
  response.setHeader("Access-Control-Allow-Methods", "*");
  response.send("");
});

app.post("/books", function (request, response) {
  console.log("Sending the response of the post request");
  response.setHeader("Content-Type", "application/json");

  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
  );
  response.setHeader("Access-Control-Allow-Methods", "*");

  let requestBook = request.body;
  let databaseBook = { ...requestBook, id: latestId++ };
  books.push(databaseBook);
  response.send(databaseBook);
});

app.put("/books/:id", function (request, response) {
  console.log("Sending the response of the put request");
  response.setHeader("Content-Type", "application/json");
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "*");
  response.setHeader("Access-Control-Allow-Methods", "*");

  let requestBookId = request.params.id;
  let requestBook = request.body;
  console.log("The book to be edited is: ", request.params);
  console.log("The book to be edited is: ", requestBook);
  // Write logic here to edit on object from array
  for (let i = 0; i < books.length; i++) {
    if (books[i].id == requestBookId) {
      books[i] = requestBook;
    }
  }
  // let databaseBook = { ...requestBook, id: latestId++ };
  // books.push(databaseBook);
  response.send(requestBook);
});

app.listen(port, function () {
  console.log(`App listening on port ${port}`);
});

// Deploy the front end code on Nodejs
// - so no CORS error will be there - But this not preferreable
// app.post
// app.put
// app.delete
