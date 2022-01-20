const express = require("express");
const router = express.Router();
const userModel = require("./../models/users");

router.post("/login", function (request, response) {
  console.log("Sending the response of the post request");
  response.setHeader("Content-Type", "application/json");

  userModel.getUser(request, function (error, result) {
    if (error) {
      console.log("The response of DB get user method: ", error);
      response.status(400).send(error);
    } else {
      console.log("The response of DB get user method: ", result);
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
