const mongoose = require("mongoose");

// Connection to the database
mongoose.connect("mongodb://127.0.0.1:27017/test", function (err, success) {
  if (err) console.log("error connecting to db", err);
  else console.log("success connecting to db", success);
});
