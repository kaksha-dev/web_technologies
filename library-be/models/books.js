const mongoose = require("mongoose");
const { exceptionHandler } = require("./../utils/helpers");

const BooksSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  author: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const BooksModel = mongoose.model("books", BooksSchema);

BooksModel.findAllBooks = (successCallBack, errorCallBack, res) => {
  BooksModel.find()
    .then(
      (dbRes) => {
        successCallBack(dbRes);
      },
      (dbErr) => {
        errorCallBack(dbErr);
      }
    )
    .catch((error) => {
      exceptionHandler(res, error);
    });
};

BooksModel.findBookById = (reqBookId, successCallBack, errorCallBack) => {
  BooksModel.findById(reqBookId)
    .then(
      (dbRes) => {
        successCallBack(dbRes);
      },
      (dbErr) => {
        errorCallBack(dbErr);
      }
    )
    .catch((error) => {
      exceptionHandler(res, error);
    });
};

BooksModel.addNewBook = (newBook, successCallBack, errorCallBack, res) => {
  BooksModel.insertMany([newBook])
    .then(
      (dbRes) => {
        successCallBack(dbRes);
      },
      (dbErr) => {
        errorCallBack(dbErr);
      }
    )
    .catch((error) => {
      exceptionHandler(res, error);
    });
};

BooksModel.updateBook = (
  reqBookId,
  update,
  successCallBack,
  errorCallBack,
  res
) => {
  BooksModel.findByIdAndUpdate(reqBookId, update)
    .then(
      (dbRes) => {
        successCallBack(dbRes);
      },
      (dbErr) => {
        errorCallBack(dbErr);
      }
    )
    .catch((error) => {
      exceptionHandler(res, error);
    });
};

BooksModel.deleteBook = (reqBookId, successCallBack, errorCallBack, res) => {
  BooksModel.findByIdAndDelete(reqBookId)
    .then(
      (dbRes) => {
        successCallBack(dbRes);
      },
      (dbErr) => {
        errorCallBack(dbErr);
      }
    )
    .catch((error) => {
      exceptionHandler(res, error);
    });
};

module.exports = { BooksModel };
