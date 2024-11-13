import mongoose from "mongoose";

try {
  await mongoose.connect(
    "mongodb+srv://vaibhav:vaibhav@cluster0.l3cv6.mongodb.net/classprojectdb"
  );
  console.log("Db Connection success")
} catch (error) {
    console.error("DB connection failed with error: ", error)
}
