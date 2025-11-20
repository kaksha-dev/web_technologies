var express = require("express");
var app = express();
const fileSystem = require("fs");

// var productsData = require("./db.json");

var port = 5000;
// convertin the incoming request body to json
var bodyParser = require("body-parser");
app.use(bodyParser.json());
//

app.get("/", (req, res) => {
  console.log("Initial response: ", res);
  res.end("Hello world");
});

app.get("/products", (req, res) => {
  fileSystem.readFile("./db.json", "utf8", (error, data) => {
    if (error) {
      console.error("Error reading database file: ", error);
      res.status(500).json({ message: "Internal server error" });
    }
    // console.log("Data from database: ", data);
    const currentDBData = JSON.parse(data);
    // console.log("Formatted data from database: ", currentDBData);
    const productsDataFromDB = currentDBData.products;

    console.log("Products data from database: ", productsDataFromDB);
    res.json(productsDataFromDB);
  });
});

app.post("/products", (req, res) => {
  let newProduct = req.body;
  console.log("Request body: ", newProduct);
  if (newProduct && newProduct.name && newProduct.price) {
    console.log("New product to be added: ", newProduct);
  } else {
    res.status(400).json({ message: "Invalid product data" });
  }

  fileSystem.readFile("./db.json", "utf8", (error, data) => {
    if (error) {
      console.error("Error reading database file: ", error);
      res.status(500).json({ message: "Internal server error" });
    }
    const currentDBData = JSON.parse(data);
    const productsDataFromDB = currentDBData.products;
    const updatedProductsData = [...productsDataFromDB, newProduct];
    currentDBData.products = updatedProductsData;

    fileSystem.writeFile(
      "./db.json",
      JSON.stringify(currentDBData),
      (error, data) => {
        if (error) {
          console.error("Error reading database file: ", error);
          return res.status(500).json({ message: "Internal server error" });
        }
        res.status(201).json({ message: "Product created successfully" });
      }
    );
  });
});

// Students to implement below 2 methids
// Sample Input: localhost:5000/products/3
// {"name": "Wireless Mouse New"}
app.put("/products/:id", (req, res) => {
  // Update product by ID
  res.status(501).json({ message: "Not implemented" });
});

// Sample Input: localhost:5000/products/3
app.delete("/products/:id", (req, res) => {
  // Delete product by ID
  res.status(501).json({ message: "Not implemented" });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});
