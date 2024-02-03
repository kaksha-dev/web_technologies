const jwt = require("jsonwebtoken");
const config = require("./../config/config.json");
const { UsersModel } = require("../models/users");

const exceptionHandler = (res, error) => {
  res.status(500);
  res.send({
    name: error.name,
    message: error.message,
  });
};

const validateJWTToken = (req, res, next) => {
  const authToken = req.headers.authorization;
  if (authToken && authToken !== "null") {
    let decodedToken;
    try {
      decodedToken = jwt.verify(authToken, config.jwtsecret);
    } catch (error) {
      res.status(401);
      res.send({ name: error.name, message: "User not authoroized" });
      return;
    }
    if (decodedToken) {
      req.userEmail = decodedToken?.email;
      next();
    } else {
      res.status(401);
      res.send({ name: "Auth error", message: "User not authoroized" });
    }
  } else {
    res.status(401);
    res.send({ name: "Auth error", message: "User not authoroized" });
  }
};

const validateEmailFromJWTToken = (req, res, next) => {
  let userEmail = req.userEmail;

  UsersModel.findUser(
    userEmail,
    (dbRes) => {
      if (dbRes?.email) {
        next();
      } else {
        res.status(403);
        res.send({
          name: "Auth error",
          message: "User forbidden or unauthenticated",
        });
      }
    },
    (dbErr) => {
      res.status(403);
      res.send({
        name: "Auth error",
        message: "User forbidden or unauthenticated",
      });
    },
    res
  );
};

module.exports = {
  exceptionHandler,
  validateJWTToken,
  validateEmailFromJWTToken,
};
