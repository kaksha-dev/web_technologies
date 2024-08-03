const jwt = require("jsonwebtoken");

function authenticateRequest(request, response, next) {
  try {
    jwt.verify(request.headers.token, "ucasecretkey", (error, result) => {
      if (error) {
        // next();
        response.status(401).send({ message: "Toekn invalid or expired" });
      } else {
        next();
      }
    });
  } catch (error) {
    response.status(401).send({ message: "Token invalid or expired" });
  }
}

// module.exports = authenticateRequest;
module.exports.authenticateRequest = authenticateRequest;
