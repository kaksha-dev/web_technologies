import express from "express";
const router = express.Router();
// const fileSystem = require("fs");
import fileSystem from "fs";
import ProductsModel from "../models/products.js";
import mongoose from "mongoose";
import { verifyToken } from "../utils/helpers.js";

router.get("/", async (req, res) => {
  await ProductsModel.getAllProducts(
    (data) => {
      res.json(data);
    },
    (error) => {
      res.status(500).json({ message: error?.message });
    }
  );
  //   console.log("Products data retrieved: ", productsData);
});

router.post("/", verifyToken, async (req, res) => {
  const newProduct = req.body;
  console.log("New Product to be added: ", newProduct);

  await ProductsModel.addNewproduct(
    newProduct,
    (data) => {
      res.json(data);
    },
    (error) => {
      if (error instanceof mongoose.Error.ValidationError) {
        res.status(400).json({ message: error?.message });
      }
      res.status(500).json({ message: error?.message });
    }
  );
  //   console.log("Products data retrieved: ", productsData);
});

export default router;

// router -> authentication -> validation -> processing
// router <- authentication <- validation <- processing
