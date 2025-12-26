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

ProductsModel.getAllProducts = async function () {
  const data = await ProductsModel.find();
  console.log("The data from database is: ", data);
  return data;
};

ProductsModel.addNewproduct = async function(newProduct) {
    const createdProduct = await ProductsModel.insertOne(newProduct)
    return createdProduct;
}

export default ProductsModel;
