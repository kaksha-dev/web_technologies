const express = require("express");
const router = express.Router();

var books = require("./../datastubs/books.json").books;

let latestId = 4;

router.get("/", function (request, response) {
  // response.send("Write some logic here to provide the list of books");
  console.log("Sending the response of the get request");
  response.send(books);
});

router.post("/", function (request, response) {
  console.log("Sending the response of the post request");
  response.setHeader("Content-Type", "application/json");

  let requestBook = request.body;
  let databaseBook = { ...requestBook, id: latestId++ };
  books.push(databaseBook);
  response.send(databaseBook);
});

router.put("/:id", function (request, response) {
  console.log("Sending the response of the put request");
  response.setHeader("Content-Type", "application/json");

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

router.delete("/:id", (request, response) => {
  let requestBookId = request.params.id;
  console.log("Id to be deleted is: ", requestBookId);
  books = books.filter((item) => item.id != requestBookId);
  response.send({ id: requestBookId });
});

module.exports = router;
