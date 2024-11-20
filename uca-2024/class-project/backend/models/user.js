import mongoose from "mongoose";
import brcypt from "bcrypt";
import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY } from "../config/constant.js";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const UserModel = mongoose.model("user", userSchema);

UserModel.getUser = async (req, successCallback, errorCallback) => {
  const emailFromReq = req?.params?.email;
  const emailFromAuthToken = req?.emailFromAuthToken;

  console.log("The req.emailFromAuthToken is: ", req.emailFromAuthToken);

  if (emailFromReq !== emailFromAuthToken) {
    errorCallback({ status: 401, message: "Invalid credentials" });
  }

  try {
    const dbRes = await UserModel.find({ email: emailFromReq });
    console.log("GET | dbRes is: ", dbRes);
    successCallback(dbRes);
  } catch (dbErr) {
    console.error("GET | dbErr is: ", dbErr.Error);
    errorCallback(dbErr);
  }
};

UserModel.signIn = async (user, successCallback, errorCallback) => {
  try {
    const dbRes = await UserModel.findOne({ email: user.email });
    if (dbRes) {
      console.log("SignIn | dbRes is: ", dbRes);
      const isPasswordMatch = brcypt.compareSync(user.password, dbRes.password);
      if (isPasswordMatch) {
        // create a token for the user
        const authToken = jwt.sign({ email: dbRes.email }, JWT_SECRET_KEY, {
          expiresIn: "1h",
        });
        successCallback({ token: authToken });
      } else {
        errorCallback({ status: 401, message: "Invalid password" });
      }
    } else {
      errorCallback({ message: "User does not exist" });
      return;
    }
  } catch (dbErr) {
    console.error("GET | dbErr is: ", dbErr.Error);
    errorCallback(dbErr);
  }
};

UserModel.addUser = async (user, successCallback, errorCallback) => {
  let encryptedPassword = "";
  if (user?.password) {
    try {
      encryptedPassword = brcypt.hashSync(user.password, 10);
    } catch (error) {}
    console.log("The encypted password is: ", encryptedPassword);
  }

  try {
    const dbRes = await UserModel.insertMany([
      { ...user, password: encryptedPassword },
    ]);
    console.log("Post | dbRes is: ", dbRes);
    successCallback(dbRes);
    // throw new Error("abc")
  } catch (dbErr) {
    console.error("Post | dbErr is: ", dbErr.Error);
    errorCallback(dbErr);
  }
};

export default UserModel;
