import { configureStore } from '@reduxjs/toolkit'
import { productsReducers } from './features/productsSlice'
import { userReducers } from './features/userSlice.js'
import { cartReducers } from './features/cartSlice'

export const selectProducts = (state) => state.products.products
export const selectCart = (state) => state.cart.cart
export const selectCartCount = (state) => state.cart.cartCount
export const selectCartItemsCount = (state) => state.cart.cartItemsCount
export const selectTotalPrice = (state) => state.cart.totalPrice
export const selectCartTotalAmount = (state) => state.cart.cartTotalAmount
export const selectCartTotalSum = (state) => state.cart.cartTotalSum
export const selectUser = (state) => state.user.user
export const selectLoading = (state) => state.products.loading
export const selectErrorProducts = (state) => state.products.error

export const store = configureStore({
  reducer: {
    products: productsReducers,
    user: userReducers,
    cart: cartReducers,
  }
})

