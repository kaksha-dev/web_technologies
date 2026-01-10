import express from "express";
const router = express.Router();
import mongoose from "mongoose";
import UsersModel from "../models/users";

router.post("/", async (req, res) => {
  const newProduct = req.body;
  console.log("New User to be added: ", newProduct);

  await UsersModel.createNewUser(
    newUser,
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