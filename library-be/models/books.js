const mongoose = require("mongoose");

const BooksSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
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

// BooksModel.find();

module.exports = { BooksModel };
