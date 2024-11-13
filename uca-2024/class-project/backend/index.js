// const app = require("express")
import express from "express";
import productsRoute from "./routes/products.js";
import "./config/dbconnection.js";

const app = express();
const port = "8080";

// Generic Middlewares
app.use(express.json());
app.use("*", (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, PUT, POST, DELETE, OPTIONS"
  );
  next();
});

// Routing middleware
app.use("/products", productsRoute);

app.get("/", (req, res) => {
  // Do some logic here
  res.send("hello world again");
});

app.listen(port, () => {
  console.log("The server is starting on port: ", port);
});
