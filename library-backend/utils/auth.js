function authenticateRequest(request, response, next) {
  console.log("The request headres are: ", request.headers);

  if (request.headers.token === "secrethashedtoken") {
    next();
    console.log("Authenticated user");
  } else {
    next();
    // response.status(401).send({ message: "Unauthenticated user" });
  }
  console.log("Authentcating the request");
}

module.exports = authenticateRequest;
