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
  {
    name: "BDTwoNameModified",
    authorName: "BDTwoAuthorNameModifed",
    id: 4,
  },
  {
    name: "BD_UI_ThreeName",
    authorName: "BD_UI_ThreeAuthorName",
    id: 5,
  },
  {
    name: "BD_UI_FourName",
    authorName: "BD_UI_FourAuthorName",
    id: 6,
  },
  {
    name: "BDFiveName",
    authorName: "BDFiveAuthorName",
    id: 7,
  },
];

app.get("/", function (request, response) {
  console.log(request);
  response.send("Hello world with root path");
});

app.get("/books", function (request, response) {
  // response.send("Write some logic here to provide the list of books");
  console.log("Sending som eresponse back");
  response.send(books);
});

app.listen(port, function () {
  console.log(`App listening on port ${port}`);
});

// Deploy the front end code on Nodejs
// - so no CORS error will be there - But this not preferreable
// app.post
// app.put
// app.delete
