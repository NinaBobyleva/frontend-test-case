import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  cartCount: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.cart.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }

      state.cartCount = state.cart.reduce(
        (total, item) => total + item.quantity,
        0
      );
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);

      state.cartCount = state.cart.reduce(
        (total, item) => total + item.quantity,
        0
      );
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cart.find((item) => item.id === id);

      if (item) {
        item.quantity = quantity;
      }

      state.cartCount = state.cart.reduce(
        (total, item) => total + item.quantity,
        0
      );
    },

    setErrorCart: (state, action) => {
      state.error = action.payload;
    },

    clearCart: (state) => {
      state.cart = [];
      state.cartCount = 0;
      state.totalPrice = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
} = cartSlice.actions;

export const cartReducers = cartSlice.reducer;