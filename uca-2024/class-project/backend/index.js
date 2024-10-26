// const app = require("express")
import express from "express";
import fileSystem from "fs";

const app = express();
const port = "8080";

app.get("/", (req, res) => {
  // Do some logic here
  res.send("hello world again");
});

app.get("/products", (req, res) => {
  console.log("The default response object is: ", res.statusCode);
  let fileData = fileSystem.readFileSync("./db.json", {encoding: "utf-8"});

  const products = JSON.parse(fileData)?.products;
  console.log("The products data is: ", products);
  if (products && products.length > 0) {
    res.send(products);
  } else {
    res.status(204);
    res.send();
  }
});

app.listen(port, () => {
  console.log("The server is starting on port: ", port);
});
