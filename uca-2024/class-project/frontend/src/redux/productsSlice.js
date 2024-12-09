import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productsList: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    setProductList: (state, action) => {
      state.productsList = action.payload;
    },
  },
});

export const { setProductList } = productsSlice.actions;

export default productsSlice.reducer;
