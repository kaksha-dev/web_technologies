var http = require("http");
var port = 5000;

var server = http.createServer(function (req, res) {
  const reqPath = req ? req.url : null;
  const reqMethod = req.method
  console.log(`Request for ${reqPath} received with method : `, reqMethod);


  if (req && reqPath == "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello world");
    return;
  }

  if (req && reqPath == "/products" && reqMethod === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(
      JSON.stringify([
        {
          id: "1",
          name: "Wireless Mouse",
          price: 25.99,
          category: "Electronics",
          stock: 150,
          image: "https://placehold.co/300x250",
        },
      ])
    );
    return;
  }

  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Not found ");
});

server.listen(port, "localhost", () => {
  console.log(`Server is running at http://localhost:${port}/`);
});
