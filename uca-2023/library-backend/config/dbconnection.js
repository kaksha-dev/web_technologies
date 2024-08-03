const mongoose = require("mongoose");

// MongoDB Local - Connect to the database
// mongoose.connect("mongodb://127.0.0.1:27017/test", function (err, success) {
//   if (err) console.log("error connecting to db", err);
//   else console.log("success connecting to db", success);
// });

// MongoDB Atlas - Connect to the database
mongoose.connect(
  "mongodb+srv://vaibhav:mongodb123@cluster0.kaod1.mongodb.net/library?retryWrites=true&w=majority",
  function (err, success) {
    if (err) console.log("error connecting to db");
    else console.log("success connecting to db");
  }
);
