import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import fetchAllProductSlice from "../slice/fetchAllProductSlice";
import createProductReducer from "../slice/createProductSlice";
import registerReducer from "../slice/registerSlice";
import loginReducer from "../slice/LoginSlice";
import cartSliceReducer from "../slice/addToCartSlice";
import singleProductSlice from "../slice/singleProductSlice";
import relatedProductSlice from "../slice/relatedProductSlice";
import newProductReducer from "../slice/newProductSlice";
import topSaleReducer from "../slice/topSaleSlice";
import topSixProductReducer from "../slice/topSixProductSlice";
import bestSellerProductReducer from "../slice/bestSellerProductSlice";

const reducer = {
  fetchAllProduct: fetchAllProductSlice,
  createProduct: createProductReducer,
  register: registerReducer,
  login: loginReducer,
  cart: cartSliceReducer,
  singleProduct: singleProductSlice,
  relatedProduct: relatedProductSlice,
  newProduct: newProductReducer,
  TopSales: topSaleReducer,
  topSixProduct: topSixProductReducer,
  BestSellerProduct: bestSellerProductReducer,
};

const middleware = [...getDefaultMiddleware(), createLogger()];
const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== "production",
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("cart", JSON.stringify(state.cart.cartItem));
  localStorage.setItem("userInfo", JSON.stringify(state.login.data));
});
export default store;
