const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  name: String,
  age: Number,
  password: String,
  username: String,
});

const UsersModel = mongoose.model("users", usersSchema);

UsersModel.getUser = function (request, callBack) {
  let username = request.body.username;
  let password = request.body.password;

  UsersModel.find({ username: username, password: password }, callBack);
};

module.exports = UsersModel;
