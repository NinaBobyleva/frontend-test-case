import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: false,
  errorProducts: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    
    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    setErrorProducts: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setProducts,
  setLoading,
  setErrorProducts,
  clearCart,
} = productsSlice.actions;

export const productsReducers = productsSlice.reducer;