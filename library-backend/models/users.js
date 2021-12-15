const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  name: String,
  age: Number,
});
