const mongoose = require("mongoose");

const booksSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
    unique: true,
  },
  authorName: {
    type: String,
  },
  reviews: [
    {
      userName: String,
      comment: String,
      rating: Number,
    },
  ],
});

/**
 * Create the collection and returns it's  reference.
 * If collection already exists, directly return the refernce
 */
const BooksModel = mongoose.model("books", booksSchema);

BooksModel.getBooks = function (request, callBack) {
  BooksModel.find({}, callBack);
};

BooksModel.insertBooks = function (request, callBack) {
  // Ge the books object from request
  let requestBook = request.body;

  // Create the book(s) the database
  BooksModel.insertMany([requestBook], callBack);
};

BooksModel.updateBook = function (request, callBack) {
  // Ge the books object from request
  let requestBookId = request.params.id;
  let requestBookUpdate = request.body;

  // Create the book(s) the database
  BooksModel.updateOne({ _id: requestBookId }, requestBookUpdate, callBack);
};

BooksModel.deleteBook = function (request, callBack) {
  // Ge the books object from request
  let requestBookId = request.params.id;

  // Create the book(s) the database
  BooksModel.deleteOne({ _id: requestBookId }, callBack);
};

module.exports = BooksModel;
