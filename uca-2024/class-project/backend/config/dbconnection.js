import mongoose from "mongoose";

try {
  await mongoose.connect(
    process.env.DB_CONNECTION
  );
  console.log("Db Connection success");
} catch (error) {
  console.error("DB connection failed with error: ", error);
}
