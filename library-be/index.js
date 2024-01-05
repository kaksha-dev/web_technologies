var express = require("express");
var app = express();

require("./config/dbConnection");
const booksRoute = require("./routes/books");
const usersRoute = require("./routes/users");

var port = 8080;

app.use(express.json());

app.use((req, res, next) => {
  const allowedOrigins = req.get("origin") || "http://localhost:3000";
  res.setHeader("Access-Control-Allow-Origin", allowedOrigins);
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  next();
});

app.use("/books", (req, res, next) => {
  console.log("Middleware is called");
  next();
});

app.use("/books", booksRoute);
app.use("/users", usersRoute);

app.listen(port, (error, res) => {
  if (error) {
    console.log("Error starting the server");
  } else {
    console.log(`App server is listening on port: ${port}`);
  }
});
