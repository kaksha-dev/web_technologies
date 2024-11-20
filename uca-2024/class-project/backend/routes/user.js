import express from "express";
// import fileSystem from "fs";
import UserModel from "../models/user.js";
import { verifyToken } from "../utils/helpers.js";

const router = express.Router();

router.get("/:email", verifyToken, (req, res) => {
  UserModel.getUser(
    req,
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
      res.status(dbErr.status || 500);
      res.send({ error: dbErr.message });
    }
  );
});

router.post("/signin", (req, res) => {
  const userCreds = req.body;
  console.log("The userCreds are: ", userCreds);

  UserModel.signIn(
    userCreds,
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
        res.status(dbErr.status || 400);
      } else {
        res.status(dbErr.status || 500);
      }
      res.send({ error: dbErr.message });
    }
  );
});

router.post("/", (req, res) => {
  const user = req.body;

  UserModel.addUser(
    user,
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

export default router;
