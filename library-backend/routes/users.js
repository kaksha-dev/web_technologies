const express = require("express");
const router = express.Router();
const userModel = require("./../models/users");

router.post("/register", function (request, response) {
  console.log("Sending the response of the register request");
  response.setHeader("Content-Type", "application/json");

  userModel.addUser(request, response, function (error, result) {
    if (error) {
      console.log("The response of DB register user method: ", error);
      response.status(400).send(error);
    } else {
      console.log("The success response of DB register user method: ", result);
      if (result.length > 0) {
        response.setHeader("token", "secrethashedtoken");
        response.send({ message: "User registered sucecssfully" });
      } else {
        response
          .status(400)
          .send({ message: "Some error creating user, please try again" });
      }
    }
  });
});

router.post("/login", function (request, response) {
  console.log("Sending the response of the post request");
  response.setHeader("Content-Type", "application/json");

  userModel.login(request, response, function (error, result) {
    if (error) {
      response.status(400).send(error);
    } else {
      if (result.length > 0) {
        response.setHeader("token", "secrethashedtoken");
        response.send(result);
      } else {
        response.status(404).send({ message: "user not found" });
      }
    }
  });
});

module.exports = router;
