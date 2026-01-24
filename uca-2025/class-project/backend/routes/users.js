import express from "express";
const router = express.Router();
import mongoose from "mongoose";
import UsersModel from "../models/users.js";

router.post("/", async (req, res) => {
  const newUser = req.body;

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

router.post("/signin", async (req, res) => {
  const user = req.body;
  console.log("user to signin: ", user);

  await UsersModel.signin(
    user,
    (data) => {
      res.json(data);
    },
    (error) => {
      if (error instanceof mongoose.Error.ValidationError) {
        res.status(400).json({ message: error?.message });
        ReadableStreamDefaultController;
      } else {
        res.status(401).json({ message: error?.message });
        return;
      }
      res.status(500).json({ message: error?.message });
    }
  );
});

router.get("/:email", async (req, res) => {
  await UsersModel.getUser(
    req,
    (data) => {
      res.json(data);
    },
    (error) => {
      if (error instanceof mongoose.Error.ValidationError) {
        res.status(400).json({ message: error?.message });
        ReadableStreamDefaultController;
      } else {
        res.status(401).json({ message: error?.message });
        return;
      }
      res.status(500).json({ message: error?.message });
    }
  );
});

export default router;
