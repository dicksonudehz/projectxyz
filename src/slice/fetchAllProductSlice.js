import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const fetchAllProductSlice = createSlice({
  name: "fetchAllProduct",

  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  reducers: {
    fetchAllProductRequest: (state) => {
      state.loading = true;
      state.data = null;
      state.error = null;
    },

    fetchAllProductSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    fetchAllProductFailure: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  fetchAllProductRequest,
  fetchAllProductSuccess,
  fetchAllProductFailure,
} = fetchAllProductSlice.actions;

export const fetchAllProduct = () => async (dispatch) => {
  try {
    dispatch(fetchAllProductRequest);

    const { data } = await axios.get(`https://delightful-spacesuit-frog.cyclic.app/api/products`);
    dispatch(fetchAllProductSuccess(data.product));
  } catch (err) {
    const message =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    dispatch(fetchAllProductFailure(message));
  }
};
export default fetchAllProductSlice.reducer;
