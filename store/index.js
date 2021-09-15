import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducer/allProductsSlice";

const store = configureStore({
  reducer: {
    productsReducer,
  },
});

export default store;
