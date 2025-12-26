import express from "express";
const router = express.Router();
// const fileSystem = require("fs");
import fileSystem from "fs";
import ProductsModel from "../models/products.js";

router.get("/", async (req, res) => {
  const productsData = await ProductsModel.getAllProducts();
  res.json(productsData);

  // fileSystem.readFile("./db.json", "utf8", (error, data) => {
  //   if (error) {
  //     console.error("Error reading database file: ", error);
  //     res.status(500).json({ message: "Internal server error" });
  //   }
  //   // console.log("Data from database: ", data);
  //   const currentDBData = JSON.parse(data);
  //   // console.log("Formatted data from database: ", currentDBData);
  //   const productsDataFromDB = currentDBData.products;

  //   console.log("Products data from database: ", productsDataFromDB);
  //   res.json(productsDataFromDB);
  // });
});

router.post("/", (req, res) => {
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

// Students to implement below 2 methods
// Sample Input: localhost:5000/products/3
// {"name": "Wireless Mouse New"}
router.put("/:id", (req, res) => {
  // Update product by ID
  let params = req.params;
  let body = req.body;
  console.log("PUT request params:", params);
  console.log("PUT request body:", body);

  fileSystem.readFile("./db.json", "utf8", (error, data) => {
    if (error) {
      console.error("Error reading database file: ", error);
      res.status(500).json({ message: "Internal server error" });
    }
    const currentDBData = JSON.parse(data);
    const productsDataFromDB = currentDBData.products;
    const productIdToUpdate = params.id;

    const productIndex = productsDataFromDB.findIndex(
      (product) => product.id == productIdToUpdate
    );

    if (productIndex === -1) {
      return res.status(404).json({ message: "Product not found" });
    }

    const updatedProduct = {
      ...productsDataFromDB[productIndex],
      ...body,
    };
    productsDataFromDB[productIndex] = updatedProduct;
    // currentDBData.products = productsDataFromDB;
    fileSystem.writeFile(
      "./db.json",
      JSON.stringify(currentDBData, null, "\t"),
      (error, data) => {
        if (error) {
          console.error("Error reading database file: ", error);
          return res.status(500).json({ message: "Internal server error" });
        }
        res.status(200).json({ message: "Product updated successfully" });
      }
    );
  });
});

router.delete("/:id", (req, res) => {
  // Delete product by ID
  let params = req.params;
  console.log("DELETE request params:", params);
  fileSystem.readFile("./db.json", "utf8", (error, data) => {
    if (error) {
      console.error("Error reading database file: ", error);
      res.status(500).json({ message: "Internal server error" });
    }
    const currentDBData = JSON.parse(data);
    const productsDataFromDB = currentDBData.products;
    const productIdToDelete = params.id;
    const productIndex = productsDataFromDB.findIndex(
      (product) => product.id == productIdToDelete
    );
    if (productIndex === -1) {
      return res.status(404).json({ message: "Product not found" });
    }
    productsDataFromDB.splice(productIndex, 1);
    // currentDBData.products = productsDataFromDB;
    fileSystem.writeFile(
      "./db.json",
      JSON.stringify(currentDBData, null, "\t"),
      (error, data) => {
        if (error) {
          console.error("Error reading database file: ", error);
          return res.status(500).json({ message: "Internal server error" });
        }
        res.status(200).json({ message: "Product deleted successfully" });
      }
    );
  });
});

// Sample Input: localhost:5000/products?id=3&name=NewName
router.put("/", (req, res) => {
  // Update product by ID
  let params = req.query;
  let body = req.body;
  console.log("PUT request query params:", params);
  console.log("PUT request body:", body);

  res.status(501).json({ message: "Not implemented" });
});

// Sample Input: localhost:5000/products/3
router.delete("/:id", (req, res) => {
  // Delete product by ID
  res.status(501).json({ message: "Not implemented" });
});

export default router;

// /path1 -> handler1
// /path1 -> handler1 -> handler2
// /path1 -> handler1 -> handler2 -> handler3

// /path1 -> handler1 => handler2 => handler3 ......son on
