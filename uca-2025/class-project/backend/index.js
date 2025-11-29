// var express = require("express");
import express from "express";
// var bodyParser = require("body-parser");
import bodyParser from "body-parser";

// import the routes
import productRoutes from "./routes/products.js";

var app = express();
var port = 5000;

// var productsData = require("./db.json");

// convertin the incoming request body to json - middlware
app.use(bodyParser.json());

// CORE handler middleware
app.use("/*splat", function (req, res, next) {
  // Allowing CORS
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/", (req, res) => {
  console.log("Initial response: ", res);
  res.end("Hello world");
});

// use the routes middleware
app.use("/products", productRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});
