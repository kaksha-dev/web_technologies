const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// For multiple connections
const dbConnections = require("./../config/dbconnection");

const usersSchema = new mongoose.Schema({
  name: String,
  username: {
    type: String,
    required: true,
  },
  password: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
});

// For single connection
// const UsersModel = mongoose.model("users", usersSchema);

// For multiple connection
const UsersModel = dbConnections.libraryConnection.model("users", usersSchema);

UsersModel.addUser = function (request, response, callBack) {
  let username = request.body.username;
  let password = request.body.password;

  // encde the password before saving
  let encodedPassword;

  try {
    encodedPassword = bcrypt.hashSync(password, 12);
  } catch (error) {
    response.status(400).send({ message: "Invalid password" });
    return;
  }
  UsersModel.find({ username: username }, (error, result) => {
    if (error) {
      response.status(500).send({ message: "Some error occured" });
    }
    if (result && result.length > 0) {
      response.status(400).send({ message: "User already exists" });
    } else {
      UsersModel.insertMany(
        { ...request.body, password: encodedPassword },
        callBack
      );
    }
  });
};

UsersModel.login = function (request, response) {
  let username = request.body.username;
  let password = request.body.password;

  let passwordMatches = false;
  UsersModel.find({ username: username }, (error, result) => {
    if (error) {
      // some db error
      response.status(500).send({ message: "Some error occured" });
    } else {
      if (result.length === 0) {
        response.status(404).send({ message: "Invalid username or password" });
        return;
      }
      passwordMatches = bcrypt.compareSync(password, result[0].password);
      if (passwordMatches) {
        // Generate jwt token
        const jwtToken = jwt.sign({ username: username }, "ucasecretkey", {
          expiresIn: 60,
        });
        response.setHeader("token", jwtToken);
        response.send({ name: result[0].name, username: result[0].username });
      } else {
        response.status(404).send({ message: "Invalid username or password" });
      }
    }
  });
};

module.exports = UsersModel;
