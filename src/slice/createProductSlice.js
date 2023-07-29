import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const createProductSlice = createSlice({
  name: "createProduct",
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  reducers: {
    createProductRequest: (state) => {
      state.loading = true;
      state.data = null;
      state.error = null;
    },
    createProductSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    createProductFailure: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});
export const {
  createProductRequest,
  createProductSuccess,
  createProductFailure,
} = createProductSlice.actions;

export const createProduct = () => async (dispatch) => {
  try {
    dispatch(createProductRequest);

    const { data } = await axios.get(
      `https://delightful-spacesuit-frog.cyclic.app/api/products`
    );
    dispatch(createProductSuccess(data.products));
    console.log(data);
  } catch (err) {
    const message =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    dispatch(createProductFailure(message));
  }
};
export default createProductSlice.reducer;
