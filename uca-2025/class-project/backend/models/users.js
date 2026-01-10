import mongoose from "mongoose";

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
    const createdUser = await UsersModel.insertOne(newUser);
    successCallback(createdUser);
  } catch (error) {
    console.error(
      "Error while fetching users: ",
      error instanceof mongoose.Error.ValidationError
    );
    errorCallback(error);
  }
};

export default UsersModel;