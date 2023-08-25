import { createSlice } from "@reduxjs/toolkit";

localStorage.setItem("cartItem", 'item')
  ? JSON.parse(localStorage.setItem("cartItem"))
  : [];
  const cartItemFromStorage = localStorage.getItem("cartItem")

const cartSlice = createSlice({
  name: "CartAddItem",
  initialState: {
    cartItem: cartItemFromStorage,
    shippingAddress: {},
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItem.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        existingItem.qty += item.qty;
        existingItem.price += item.price
      } else {
        state.cartItem.push({
          name:item.name,
          price:item.price,
          quantity:item.quantity,
          totalPrice:item.totalPrice
        });
      }
    },

    removeItemFromCart: (state, action) => {
      const id = action.payload;
      state.cartItem = state.cartItem.filter(
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
  CartAddItem,
  addToCart,
  removeItemFromCart,
  saveShippingAddress,
  savePaymentMethod,
} = cartSlice.actions;

export default cartSlice.reducer;
