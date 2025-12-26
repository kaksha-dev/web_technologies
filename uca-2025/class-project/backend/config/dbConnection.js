import mongoose from "mongoose";

try {
  await mongoose.connect("mongodb://127.0.0.1:27017/classdb1", {});
  console.log("MongoDB connected successfully");
} catch (error) {
  console.log("Error connecting to the db");
}

// var dbConnection = mongoose.connection;

// console.log("The db connection instance is: ", dbConnection);

//// Sample mongoose commands
// mongoose.Schema
// mongoose.Model