const express = require("express");
const router = express.Router();
const booksModel = require("./../models/books");
var books = require("./../datastubs/books.json").books;

let latestId = 4;

router.get("/", function (request, response) {
  console.log("Sending the response of the get request");
  // Replace with actual database data
  // response.send("Write some logic here to provide the list of books");
  // response.send(books);
  booksModel.getBooks(request, function (error, result) {
    if (error) response.send("Error while featching books");
    else response.send(result);
  });
});

router.post("/", function (request, response) {
  console.log("Sending the response of the post request");
  response.setHeader("Content-Type", "application/json");

  // Replace with actual database data
  // let requestBook = request.body;
  // let databaseBook = { ...requestBook, id: latestId++ };
  // books.push(databaseBook);
  // response.send(databaseBook);

  booksModel.insertBooks(request, function (error, result) {
    if (error) {
      console.log("The response of DB insertMany method: ", error);
      response.status(400).send(error);
    } else {
      console.log("The response of DB insertMany method: ", result);
      response.send(result);
    }
  });
});

router.put("/:id", function (request, response) {
  console.log("Sending the response of the put request");
  response.setHeader("Content-Type", "application/json");

  // let requestBookId = request.params.id;
  // let requestBook = request.body;
  // console.log("The book to be edited is: ", request.params);
  // console.log("The book to be edited is: ", requestBook);
  // // Write logic here to edit on object from array
  // for (let i = 0; i < books.length; i++) {
  //   if (books[i].id == requestBookId) {
  //     books[i] = requestBook;
  //   }
  // }
  // let databaseBook = { ...requestBook, id: latestId++ };
  // books.push(databaseBook);
  // response.send(requestBook);

  booksModel.updateBook(request, function (error, result) {
    if (error) {
      console.log("The response of DB updateOne method: ", error);
      response.status(400).send(error);
    } else {
      console.log("The response of DB updateOne method: ", result);
      response.send(result);
    }
  });
});

router.delete("/:id", (request, response) => {
  // let requestBookId = request.params.id;
  // console.log("Id to be deleted is: ", requestBookId);
  // books = books.filter((item) => item.id != requestBookId);
  // response.send({ id: requestBookId });

  booksModel.deleteBook(request, function (error, result) {
    if (error) {
      console.log("The response of DB delete method: ", error);
      response.status(400).send(error);
    } else {
      console.log("The response of DB delete method: ", result);
      response.send(result);
    }
  });
});

module.exports = router;
