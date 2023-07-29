import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const newProductSlice = createSlice({
  name: "newProduct",
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  reducers: {
    newProductRequest: (state) => {
      state.loading = true;
      state.data = null;
      state.error = null;
    },
    newProductSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    newProductFailure: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { newProductRequest, newProductSuccess, newProductFailure } =
  newProductSlice.actions;

export const newProduct = () => async (dispatch) => {
  try {
    dispatch(newProductRequest());
    const { data } = await axios.get(
      `https://delightful-spacesuit-frog.cyclic.app/api/products/new`
    );
    dispatch(newProductSuccess(data.products));
    console.log(data)
  } catch (err) {
    const message =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    dispatch(newProductFailure(message));
  }
};

export default newProductSlice.reducer;
