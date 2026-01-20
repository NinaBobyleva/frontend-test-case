import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './features/productsSlice';
import { userReducer } from './features/userSlice.js';
import { cartReducer } from './features/cartSlice';

export const selectFilterProducts = (state) => state.products.filterProducts;
export const selectCart = (state) => state.cart.cart;
export const selectCartCount = (state) => state.cart.cartCount;
export const selectTotalPrice = (state) => state.cart.totalPrice;
export const selectUser = (state) => state.user.user;
export const selectLoading = (state) => state.products.loading;
export const selectCategory = (state) => state.products.filters.category;
export const selectSort = (state) => state.products.filters.sort;
export const selectSearchTerm = (state) => state.products.filters.searchTerm;

export const store = configureStore({
  reducer: {
    products: productsReducer,
    user: userReducer,
    cart: cartReducer,
  }
});

