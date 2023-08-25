import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BestSellerProductSlice = createSlice({
  name: "BestSellerProduct",
  initialState: {
    loading: false,
    data: null,
    error: null,
  },

  reducers: {
    bestSellerProductRequest: (state) => {
      state.loading = true;
      state.data = null;
      state.error = null;
    },
    bestSellerProductSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    bestSellerProductFailure: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  bestSellerProductRequest,
  bestSellerProductSuccess,
  bestSellerProductFailure,
} = BestSellerProductSlice.actions;

export const BestSellerProduct = () => async (dispatch) => {
  try {
    dispatch(bestSellerProductRequest);
    const { data } = await axios.get(
      `https://delightful-spacesuit-frog.cyclic.app/api/products/best`
    );
    dispatch(bestSellerProductSuccess(data.products));
  } catch (err) {
    const message =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    dispatch(bestSellerProductFailure(message));
  }
};

export default BestSellerProductSlice.reducer;
