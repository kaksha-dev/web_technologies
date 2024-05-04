import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./feature/books/slice";

export const makeStore = () => {
  return configureStore({
    reducer: { books: booksReducer },
  });
};
