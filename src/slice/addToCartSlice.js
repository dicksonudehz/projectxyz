import { createSlice } from "@reduxjs/toolkit";

const cartItemFromStorage = localStorage.getItem("cartItem")
  ? JSON.parse(localStorage.getItem("cartItem"))
  : [];
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: cartItemFromStorage,
    shippingAddress: {},
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItem.find(
        (cartItem) => cartItem.product === item.product
      );

      if (existingItem) {
        existingItem.qty += item.qty;
      } else {
        state.cartItems.push(item);
      }
    },
    removeItemFromCart: (state, action) => {
      const id = action.payload; 
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.product !== id
      );
    },
    saveShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
    },
    savePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
    },
  },
});
export const {
  addToCart, 
  removeItemFromCart,
  saveShippingAddress,
  savePaymentMethod,
} = cartSlice.actions;

export default cartSlice.reducer;
