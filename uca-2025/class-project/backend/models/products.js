import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: false,
  },
  image: {
    type: String,
    required: true,
  },
});

const ProductsModel = mongoose.model("Products", productsSchema);

ProductsModel.getAllProducts = async function (successCallback, errorCallback) {
  try {
    const data = await ProductsModel.find();
    console.log("The data from database is: ", data);
    successCallback(data);
    // return data;
  } catch (error) {
    console.error("Error while fetching products: ", error);
    errorCallback(error);
    // return error.message;
  }
};

ProductsModel.addNewproduct = async function (
  newProduct,
  successCallback,
  errorCallback
) {
  try {
    const createdProduct = await ProductsModel.insertOne(newProduct);
    successCallback(createdProduct);
  } catch (error) {
    console.error(
      "Error while fetching products: ",
      error instanceof mongoose.Error.ValidationError
    );
    errorCallback(error);
  }
};

export default ProductsModel;
