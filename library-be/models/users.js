const mongoose = require("mongoose");
const { exceptionHandler } = require("./../utils/helpers");

const UsersSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const UsersModel = mongoose.model("users", UsersSchema);

UsersModel.addNewUser = (newUser, successCallBack, errorCallBack, res) => {
  UsersModel.insertMany([newUser])
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

module.exports = { UsersModel };
