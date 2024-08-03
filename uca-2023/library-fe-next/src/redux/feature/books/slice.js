import { createSlice } from "@reduxjs/toolkit";

const initialState = { booksData: [], booksCount: 0 };

const booksSlice = createSlice({
  name: "booksSlice",
  initialState,
  reducers: {
    setBooksData: (state, action) => {
      state.booksData = action.payload;
    },
    setBooksCount: (state, action) => {
      state.booksCount = action.payload.length;
    },
  },
});

export const { setBooksData, setBooksCount } = booksSlice.actions;

export default booksSlice.reducer;
