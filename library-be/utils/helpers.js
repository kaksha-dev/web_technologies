const jwt = require("jsonwebtoken");
const config = require("./../config/config.json");

const exceptionHandler = (res, error) => {
  res.status(500);
  res.send({
    name: error.name,
    message: error.message,
  });
};

const validateJWTToken = (req, res, next) => {
  const authToken = req.headers.authorization;
  if (authToken) {
    let decodedToken;
    try {
      decodedToken = jwt.verify(authToken, config.jwtsecret);
    } catch (error) {
      res.status(401);
      res.send({ name: error.name, message: "User not authoroized" });
      return;
    }
    if (decodedToken) {
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

module.exports = { exceptionHandler, validateJWTToken };
