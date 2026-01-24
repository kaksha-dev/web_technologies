import mongoose from "mongoose";
import bycrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY } from "../config/constants";

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const UsersModel = mongoose.model("Users", usersSchema);

UsersModel.createNewUser = async function (
  newUser,
  successCallback,
  errorCallback
) {
  try {
    const password = newUser.password;
    const encryptedPassword = bycrypt.hashSync(password, 10);
    newUser.password = encryptedPassword;

    // Send the new user to the database
    const createdUser = await UsersModel.insertOne({
      ...newUser,
      password: encryptedPassword,
    });
    successCallback(createdUser);
  } catch (error) {
    console.error(
      "Error while creating users: ",
      error instanceof mongoose.Error.ValidationError
    );
    errorCallback(error);
  }
};

UsersModel.signin = async function (user, successCallback, errorCallback) {
  const userEmail = user.email;

  try {
    const dbRes = await UsersModel.findOne({ email: userEmail });
    console.log("DB Response for user : ", dbRes);
    if (!dbRes) {
      errorCallback({ message: "User does not exists" });
      return;
    }

    const isPasswordMatch = bycrypt.compareSync(user.password, dbRes.password);
    if (!isPasswordMatch) {
      errorCallback({ message: "Invalid credentials" });
      return;
    }

    const jwtToken = jwt.sign({ email: dbRes.email }, JWT_SECRET_KEY, {
      expiresIn: "2h",
    });

    successCallback({ message: "Sign in sucess", token: jwtToken });
  } catch (error) {
    errorCallback(error);
  }
};

UsersModel.getUser = async function (req, successCallback, errorCallback) {
  const userEmail = req.params.email;
  const token = req.headers["authorization"];

  try {
    const jwtDecodedToken = jwt.verify(token, JWT_SECRET_KEY);
    if (jwtDecodedToken.email !== userEmail) {
      errorCallback({ message: "Unauthorized access" });
      return;
    }

    const dbRes = await UsersModel.findOne({ email: userEmail });
    successCallback({ email: userEmail, name: dbRes.name });
    console.log("DB Response for user : ", dbRes);
  } catch (error) {
    console.log(error)
    errorCallback(error);
  }
};
export default UsersModel;
