var express = require("express");
var fileSystem = require("fs");
var app = express();

app.use(express.json());

var port = 8080;
var dbPath = "./db.json";

app.get("/books", (req, res) => {
  try {
    var dbRawData = fileSystem.readFileSync(dbPath);
    var dbParsedData = JSON.parse(dbRawData);
    res.status(200);
    res.send(dbParsedData.books);
  } catch (error) {
    res.status(500);
    res.send("Error reading from database");
  }
});

app.post("/books", (req, res) => {
  let newBook = req.body;

  try {
    var dbRawData = fileSystem.readFileSync(dbPath);
    var dbParsedData = JSON.parse(dbRawData);
    dbParsedData.books.push(newBook);
    fileSystem.writeFileSync(dbPath, JSON.stringify(dbParsedData));
    res.status(201);
    res.send("Book created succesfully");
  } catch (error) {
    res.status(500);
    res.send("Error writting to database");
  }
});

app.listen(port, (error, res) => {
  if (error) {
    console.log("Error starting the server");
  } else {
    console.log(`App server is listening on port: ${port}`);
  }
});
