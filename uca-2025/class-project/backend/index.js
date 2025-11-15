var express = require("express");
var app = express();

var port = 5000;

app.get("/", (req, res) => {
  res.end("Hello world");
});

app.get("/products", (req, res) => {
  res.json([
    {
      id: "1",
      name: "Wireless Mouse",
      price: 25.99,
      category: "Electronics",
      stock: 150,
      image: "https://placehold.co/300x250",
    },
  ]);
});

app.post("/products", (req, res) => {
    res.status(201).json({ message: "Product created successfully" });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});
