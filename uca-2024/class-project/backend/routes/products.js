import express from "express";
import fileSystem from "fs";

const router = express.Router();

router.get("/", (req, res) => {
  console.log("Response now from router");
  let fileData = fileSystem.readFileSync("./db.json", { encoding: "utf-8" });

  const products = JSON.parse(fileData)?.products;
  console.log("The products data is: ", products);
  if (products && products.length > 0) {
    res.send(products);
  } else {
    res.status(204);
    res.send();
  }
});

router.post("/", (req, res) => {
  const product = req.body;
  // Logic to update the content in file
  let db;
  try {
    db = fileSystem.readFileSync("./db.json", { encoding: "utf-8" });
  } catch (error) {
    res.status(500);
    return res.send({
      message: "Problem connecting with database",
      error: error,
    });
  }
  let dbParsed = JSON.parse(db);
  let currentProductsList = dbParsed.products;
  let updatedProductsList = [...currentProductsList, product];
  let updatedDbParsed = { ...dbParsed, products: updatedProductsList };
  let updatedDb = JSON.stringify(updatedDbParsed);

  try {
    fileSystem.writeFileSync("./db.json", updatedDb);
    res.send({ message: "Post api success", product: product });
  } catch (error) {
    res.status(500);
    res.send({ error: error, message: "Post api failure" });
  }
});

export default router;
