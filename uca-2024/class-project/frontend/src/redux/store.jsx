import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    userDetails: {},
  },
});

export default store;
