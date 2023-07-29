import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const relatedProductSlice = createSlice({
  name: "relatedProduct",
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  reducers: {
    relatedProductRequest: (state) => {
      state.loading = true;
      state.data = null;
      state.error = null;
    },
    relatedProductSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    relatedProductFailure: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  relatedProductRequest,
  relatedProductSuccess,
  relatedProductFailure,
} = relatedProductSlice.actions;

export const relatedProduct = (id) => async (dispatch) => {
  try {
    dispatch(relatedProductRequest());

    const { data } = await axios.get(
      `https://delightful-spacesuit-frog.cyclic.app/api/products/64b2c5b8eb73887bfe6eed4e/related`
    );

    dispatch(relatedProductSuccess(data.actual));
  } catch (err) {
    const message =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    dispatch(relatedProductFailure(message));
  }
};

export default relatedProductSlice.reducer;
