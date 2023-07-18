import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit"
import { createLogger } from "redux-logger";


import fetchAllProductSlice from "../slice/fetchAllProductSlice";

const reducer = {
    fetchAllProduct : fetchAllProductSlice
}

const middleware = [...getDefaultMiddleware(), createLogger()]

const store = configureStore({
    reducer,
    middleware,
    devTools : process.env.NODE_ENV !== "production" 
})


store.subscribe(() =>{
    const state = store.getState();
    // localStorage.setItem('cartItem', JSON.stringify(state.cart.cartItems));
    // localStorage.setItem('userInfo', JSON.stringify(state.login.data));
});
export default store