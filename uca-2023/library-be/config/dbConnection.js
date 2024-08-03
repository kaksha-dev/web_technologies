const mongoose = require("mongoose");
const config = require("./config.json");

mongoose
  .connect(config.dbPath)
  .then(
    (res) => {
      console.log("DB connection succesful");
    },
    (err) => {
      console.error("DB connection failed");
    }
  )
  .catch((err) => {
    console.error("DB connection failed");
  });
