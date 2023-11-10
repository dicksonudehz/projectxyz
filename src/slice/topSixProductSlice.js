import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const topSixProductSlice = createSlice({
  name: "topSixProduct",

  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  reducers: {
    topSixProductRequest: (state) => {
      state.loading = true;
      state.data = null;
      state.error = null;
    },

    topSixProductSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    topSixProductFailure: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  topSixProductRequest,
  topSixProductSuccess,
  topSixProductFailure,
} = topSixProductSlice.actions;

export const topSixProduct = () => async (dispatch) => {
  try {
    dispatch(topSixProductRequest);

    const { data } = await axios.get(`https://calm-gold-dugong-gown.cyclic.app/api/products/featured`);
    dispatch(topSixProductSuccess(data));
  } catch (err) {
    const message =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    dispatch(topSixProductFailure(message));
  }
};
export default topSixProductSlice.reducer;
