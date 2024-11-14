import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  productPrice: {
    type: Number,
    required: true,
  },
});

const ProductsModel = mongoose.model("product", productsSchema);

ProductsModel.findAllProducts = async (successCallback, errorCallback) => {
  try {
    const dbRes = await ProductsModel.find();
    console.log("GET | dbRes is: ", dbRes);
    successCallback(dbRes);
  } catch (dbErr) {
    console.error("GET | dbErr is: ", dbErr.Error);
    errorCallback(dbErr);
  }
};

ProductsModel.addProduct = async (product, successCallback, errorCallback) => {
  try {
    const dbRes = await ProductsModel.insertMany([product]);
    console.log("Post | dbRes is: ", dbRes);
    successCallback(dbRes);
    // throw new Error("abc")
  } catch (dbErr) {
    console.error("Post | dbErr is: ", dbErr.Error);
    errorCallback(dbErr);
  }
};

ProductsModel.editProduct = async (product, successCallback, errorCallback) => {
  try {
    const dbRes = await ProductsModel.findByIdAndUpdate(product._id, product);
    console.log("Edit | dbRes is: ", dbRes);
    successCallback(dbRes);
    // throw new Error("abc")
  } catch (dbErr) {
    console.error("Edit | dbErr is: ", dbErr.Error);
    errorCallback(dbErr);
  }
};

ProductsModel.deleteProduct = async (id, successCallback, errorCallback) => {
  try {
    const dbRes = await ProductsModel.findByIdAndDelete(id);
    console.log("Delete | dbRes is: ", dbRes);
    successCallback(dbRes);
    // throw new Error("abc")
  } catch (dbErr) {
    console.error("Delete | dbErr is: ", dbErr.Error);
    errorCallback(dbErr);
  }
};

export default ProductsModel;
