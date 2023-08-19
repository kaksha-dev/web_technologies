const http = require("http");

const listener = function (req, res) {
  if (true) {
    res.writeHead(201);
    res.end("Success response from the server");
  } else {
    res.writeHead(400, { "Content-type": "text/html" });
    res.end("Failed response from the server");
  }
};
const httpServer = http.createServer(listener);

httpServer.listen("3000", "", () => {
  console.log("Server listening now on port 3000 on localhost");
});

// 3000 - localhost
// 8080 or 80 - http
// 4043 - https
