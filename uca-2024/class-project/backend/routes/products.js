import express from "express";
import fileSystem from "fs";
import ProductsModel from "../models/products.js";

const router = express.Router();

router.get("/", (req, res) => {
  console.log("Response now from router");

  ProductsModel.findAllProducts(
    (dbRes) => {
      if (dbRes) {
        res.send(dbRes);
      } else {
        res.status(204);
        res.send(dbRes);
      }
    },
    (dbErr) => {
      console.log(dbErr.name);
      res.status(500);
      res.send({ error: dbErr.message });
    }
  );
});

router.post("/", (req, res) => {
  const product = req.body;

  ProductsModel.addProduct(
    product,
    (dbRes) => {
      if (dbRes) {
        res.send(dbRes);
      } else {
        res.status(400);
        res.send(dbRes);
      }
    },
    (dbErr) => {
      console.log(dbErr.name);
      if (dbErr.name === "ValidationError") {
        res.status(400);
      } else {
        res.status(500);
      }
      res.send({ error: dbErr.message });
    }
  );
});

router.put("/", (req, res) => {
  const product = req.body;

  ProductsModel.editProduct(
    product,
    (dbRes) => {
      if (dbRes) {
        res.send(dbRes);
      } else {
        res.status(400);
        res.send(dbRes);
      }
    },
    (dbErr) => {
      console.log(dbErr.name);
      if (dbErr.name === "ValidationError") {
        res.status(400);
      } else {
        res.status(500);
      }
      res.send({ error: dbErr.message });
    }
  );
});

router.delete("/", (req, res) => {
  const productId = req.body._id;

  ProductsModel.deleteProduct(
    productId,
    (dbRes) => {
      if (dbRes) {
        res.send(dbRes);
      } else {
        res.status(400);
        res.send({error: "Product does not exist"});
      }
    },
    (dbErr) => {
      console.log(dbErr.name);
      if (dbErr.name === "ValidationError") {
        res.status(400);
      } else {
        res.status(500);
      }
      res.send({ error: dbErr.message });
    }
  );
});

export default router;
