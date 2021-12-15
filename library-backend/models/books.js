const mongoose = require("mongoose");

const booksSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  },
  authorName: {
    type: String,
  },
});

/**
 * Create the collection and returns it's  reference.
 * If collection already exists, directly return the refernce
 */
const BooksModel = mongoose.model("books", booksSchema);
