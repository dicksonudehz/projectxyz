import { createSlice } from "@reduxjs/toolkit";

const getCartItem = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItem: getCartItem,
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
        state.cartItem.push(item);
      }
      // state.qty++;
    },

    removeItemFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItem.find((item) => item.id === id);
      if(existingItem >= 1){
        state.cartItem = state.cartItem.filter(
          (cartItem) => cartItem.product !== id
        );
        state.qty--

        console.log(state.qty--, 'this is the existing item from the remove from the cart')
      }
     
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
