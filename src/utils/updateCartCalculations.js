export const updateCartCalculations = (state) => {
  state.cartCount = state.cart.reduce((total, item) => total + item.quantity, 0);
  state.totalPrice = state.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
};