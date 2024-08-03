const express = require("express");
const router = express.Router();
const { BooksModel } = require("./../models/books");
const { default: mongoose } = require("mongoose");
const {
  validateJWTToken,
  validateEmailFromJWTToken,
} = require("../utils/helpers");

router.get("", (req, res) => {
  BooksModel.findAllBooks(
    (dbRes) => {
      res.send(dbRes);
    },
    (dbErr) => {
      res.status(400);
      res.send({ name: dbErr.name, message: dbErr.message });
    },
    res
  );
});

router.get("/:reqBookId", async (req, res) => {
  let reqBookId = req.params.reqBookId;
  if (!mongoose.Types.ObjectId.isValid(reqBookId)) {
    res.status(400);
    res.send({ message: "Record does not exist" });
    res.end();
    return;
  }
  BooksModel.findBookById(
    reqBookId,
    (dbRes) => {
      if (dbRes) {
        res.send(dbRes);
      } else {
        res.status(404);
        res.send({ message: "Record does not exist" });
      }
    },
    (dbErr) => {
      res.status(400);
      res.send({ name: dbErr.name, message: dbErr.message });
    },
    res
  );
});

router.post("", validateJWTToken, validateEmailFromJWTToken, (req, res) => {
  let newBook = req.body;

  BooksModel.addNewBook(
    newBook,
    (dbRes) => {
      res.send(dbRes);
    },
    (dbErr) => {
      res.status(400);
      res.send({ name: dbErr.name, message: dbErr.message });
    },
    res
  );
});

router.put(
  "/:reqBookId",
  validateJWTToken,
  validateEmailFromJWTToken,
  (req, res) => {
    let reqBookId = req.params.reqBookId;
    let updatedBook = req.body;

    if (!mongoose.Types.ObjectId.isValid(reqBookId)) {
      res.status(400);
      res.send({ message: "Record does not exist" });
      res.end();
      return;
    }

    BooksModel.updateBook(
      reqBookId,
      updatedBook,
      (dbRes) => {
        if (dbRes) {
          res.send({ message: "Record updated successfully" });
        } else {
          res.status(400);
          res.send({ message: "Record does not exist" });
        }
      },
      (dbErr) => {
        res.status(400);
        res.send({ name: dbErr.name, message: dbErr.message });
      },
      res
    );
  }
);

router.delete(
  "/:reqBookId",
  validateJWTToken,
  validateEmailFromJWTToken,
  (req, res) => {
    let reqBookId = req.params.reqBookId;

    if (!mongoose.Types.ObjectId.isValid(reqBookId)) {
      res.status(400);
      res.send({ message: "Record does not exist" });
      res.end();
      return;
    }

    BooksModel.deleteBook(
      reqBookId,
      (dbRes) => {
        if (dbRes) {
          res.send({ message: "Record deleted successfully" });
        } else {
          res.status(400);
          res.send({ message: "Record does not exist" });
        }
      },
      (dbErr) => {
        res.status(400);
        res.send({ name: dbErr.name, message: dbErr.message });
      },
      res
    );
  }
);

module.exports = router;
