var express = require("express");
var fileSystem = require("fs");
var app = express();

require("./config/dbConnection");
const { BooksModel } = require("./models/books");
var dbPath = "./db.json";

var port = 8080;

app.use(express.json());

app.use((req, res, next) => {
  // res.setHeader("Access-Control-Allow-Origin", req.get("origin"));
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  next();
});

app.get("/books", (req, res) => {
  BooksModel.find()
    .then(
      (dbRes) => {
        res.send(dbRes);
      },
      (dbErr) => {
        res.status(400);
        res.send({ message: "Bad request" });
      }
    )
    .catch((dbErr) => {
      console.log("The catch error is: ", dbErr);
      res.status(500);
      res.send({
        message: "An unknown error occured, please try again later",
        error: dbErr,
      });
    });
});

app.get("/books/:reqBookId", async (req, res) => {
  let reqBookId = req.params.reqBookId;
  BooksModel.findById(reqBookId)
    .then(
      (dbRes) => {
        res.send(dbRes);
      },
      (dbErr) => {
        res.status(400);
        res.send({ message: "Bad request" });
      }
    )
    .catch((dbErr) => {
      res.status(500);
      res.send({
        message: "An unknown error occured, please try again later",
        error: dbErr,
      });
    });
});

app.post("/books", (req, res) => {
  let newBook = req.body;

  BooksModel.insertMany([newBook])
    .then(
      (dbRes) => {
        res.send(dbRes);
      },
      (dbErr) => {
        res.status(400);
        res.send({ message: "Bad request", error: dbErr });
      }
    )
    .catch((dbErr) => {
      res.status(500);
      res.send({
        message: "An unknown error occured, please try again later",
        error: dbErr,
      });
    });
});

// app.get("/books", (req, res) => {
//   try {
//     var dbRawData = fileSystem.readFileSync(dbPath);
//     var dbParsedData = JSON.parse(dbRawData);
//     res.status(200);
//     res.send(dbParsedData.books);
//   } catch (error) {
//     res.status(500);
//     res.send({ message: "An unknown error occured, please try again later" });
//   }
// });

// app.post("/books", (req, res) => {
//   let newBook = req.body;

//   try {
//     var dbRawData = fileSystem.readFileSync(dbPath);
//     var dbParsedData = JSON.parse(dbRawData);
//     dbParsedData.books.push({
//       id: Math.floor(Math.random() * 100000),
//       ...newBook,
//     });
//     fileSystem.writeFileSync(dbPath, JSON.stringify(dbParsedData, null, 2));
//     res.status(201);
//     res.send({ message: "Book created succesfully" });
//   } catch (error) {
//     res.status(500);
//     res.send({ message: "An unknown error occured, please try again later" });
//   }
// });

app.put("/books/:reqBookId", (req, res) => {
  let reqBookId = req.params.reqBookId;
  let updateRequestBook = req.body;

  try {
    var dbRawData = fileSystem.readFileSync(dbPath);
    var dbParsedData = JSON.parse(dbRawData);

    let reqBookIndex = dbParsedData.books.findIndex(
      (item) => item.id.toString() === reqBookId
    );
    if (reqBookIndex > -1) {
      for (let key in updateRequestBook) {
        // dbParsedData.books[reqBookIndex] = updateRequestBook;
        if (
          typeof dbParsedData.books[reqBookIndex][key] !== "undefined" &&
          key !== "id"
        ) {
          dbParsedData.books[reqBookIndex][key] = updateRequestBook[key];
        }
      }
      fileSystem.writeFileSync(dbPath, JSON.stringify(dbParsedData, null, 2));

      res.send({
        message: "Book updated succesfully",
        book: dbParsedData.books[reqBookIndex],
      });
    } else {
      res.status(404);
      res.send({
        message: "Book does not exist",
      });
    }
  } catch (error) {
    res.status(500);
    res.send({ message: "An unknown error occured, please try again later" });
  }
});

app.delete("/books/:reqBookId", (req, res) => {
  let reqBookId = req.params.reqBookId;

  try {
    var dbRawData = fileSystem.readFileSync(dbPath);
    var dbParsedData = JSON.parse(dbRawData);

    let reqBookIndex = dbParsedData.books.findIndex(
      (item) => item.id.toString() === reqBookId
    );
    if (reqBookIndex > -1) {
      dbParsedData.books.splice(reqBookIndex, 1);
      fileSystem.writeFileSync(dbPath, JSON.stringify(dbParsedData, null, 2));
      res.send({ message: "Book deleted successfully" });
    } else {
      res.status(404);
      res.send({
        message: "Book does not exist",
      });
    }
  } catch (error) {
    res.status(500);
    res.send({ message: "An unknown error occured, please try again later" });
  }
});

app.listen(port, (error, res) => {
  if (error) {
    console.log("Error starting the server");
  } else {
    console.log(`App server is listening on port: ${port}`);
  }
});
