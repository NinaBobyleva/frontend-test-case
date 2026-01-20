import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './features/productsSlice';
import { userReducer } from './features/userSlice.js';
import { cartReducer } from './features/cartSlice';

export const selectProducts = (state) => state.products.products;
export const selectCart = (state) => state.cart.cart;
export const selectCartCount = (state) => state.cart.cartCount;
export const selectTotalPrice = (state) => state.cart.totalPrice;
export const selectUser = (state) => state.user.user;
export const selectLoading = (state) => state.products.loading;

export const store = configureStore({
  reducer: {
    products: productsReducer,
    user: userReducer,
    cart: cartReducer,
  }
});

