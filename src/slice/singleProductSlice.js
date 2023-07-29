import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  reducers: {
    singleProductRequest: (state) => {
      state.loading = true;
      state.data = null;
      state.error = null;
    },
    singleProductSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    singleProductFailure: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});
export const {
  singleProductRequest,
  singleProductSuccess,
  singleProductFailure,
} = singleProductSlice.actions;
export const singleProduct = (id) => async (dispatch) => {
  try {
    dispatch(singleProductRequest());
    const { data } = await axios.get(
      `https://delightful-spacesuit-frog.cyclic.app/64b2c489eb73887bfe6eed4a`
    );
    dispatch(singleProductSuccess(data.product));
  } catch (err) {
    const message =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    dispatch(singleProductFailure(message));
  }
};
export default singleProductSlice.reducer;
