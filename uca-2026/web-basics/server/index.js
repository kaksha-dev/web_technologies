import * as http from "http";

// const foo = function () {
//   console.log("Insid");
// };
// let x = 12;
let value = "Hello world!";
console.log("Node.js first program", value);

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" });
  res.end(
    JSON.stringify({
      name: "John Doe",
      description: "Hello world!",
    }),
  );
});

const hostname = "127.0.0.1";
const port = "5000";
server.listen(port, hostname);
