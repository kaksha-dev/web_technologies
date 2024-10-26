// const app = require("express")
import express from "express";
import productsRoute from "./routes/products.js"

const app = express();
const port = "8080";

app.use(express.json());
app.use("/products", productsRoute)

app.get("/", (req, res) => {
  // Do some logic here
  res.send("hello world again");
});

app.listen(port, () => {
  console.log("The server is starting on port: ", port);
});
