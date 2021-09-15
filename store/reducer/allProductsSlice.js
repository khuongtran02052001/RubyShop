import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk("products/getAll", async () => {
  const response = await axios.get(
    "https://fakestoreapi.com/products?_limit=10"
  );
  return response.data;
});

const productsSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: [],
  },
  extraReducers: {
    [getAllProducts.fulfilled]: (state, action) => {
      state.allProducts = action.payload;
    },
  },
});

const productsReducer = productsSlice.reducer;

export const productsSelector = (state) => state.productsReducer.allProducts;

export default productsReducer;
