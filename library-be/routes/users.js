const express = require("express");
const router = express.Router();
const { UsersModel } = require("./../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("./../config/config.json");

router.post("", (req, res) => {
  let newUser = req.body;
  newUser.password = bcrypt.hashSync(newUser.password, 10);

  UsersModel.addNewUser(
    newUser,
    (dbRes) => {
      res.send(dbRes);
    },
    (dbErr) => {
      res.status(400);
      res.send({ name: dbErr.name, message: dbErr.message });
    },
    res
  );
});

router.post("/login", (req, res) => {
  let user = req.body;
  let usermail = user.email;
  let password = user.password;

  UsersModel.login(
    usermail,
    (dbRes) => {
      let userDetailsfromDB = dbRes;
      if (userDetailsfromDB) {
        let result = bcrypt.compareSync(password, userDetailsfromDB.password);
        if (result) {
          const jwtToken = jwt.sign(
            { email: userDetailsfromDB?.email },
            config.jwtsecret
          );
          res.send({
            message: "User authentication success",
            data: {
              access_token: jwtToken,
            },
          });
        } else {
          res.status(401);
          res.send({ name: "Unknown", message: "User authenticated failed" });
        }
      } else {
        res.status(404);
        res.send({ name: "User", message: "User not found" });
      }
    },
    (dbErr) => {
      res.status(404);
      res.send({ name: dbErr.name, message: dbErr.message });
    },
    res
  );
});

module.exports = router;
