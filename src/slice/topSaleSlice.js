import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const topSaleSlice = createSlice({
  name: "TopSales",

  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  reducers: {
    fetchTopSalesRequest: (state) => {
      state.loading = true;
      state.data = null;
      state.error = null;
    },
    fetchTopSalesSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    fetchTopSalesFailure: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});
export const {
  fetchTopSalesRequest,
  fetchTopSalesSuccess,
  fetchTopSalesFailure,
} = topSaleSlice.actions;

export const TopSales = () => async (dispatch) => {
  try {
    dispatch(fetchTopSalesRequest);
    const { data } = await axios.get(
      `https://delightful-spacesuit-frog.cyclic.app/api/products/top-sales`
    );
    dispatch(fetchTopSalesSuccess(data.topSales));
  } catch (err) {
    const message =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    dispatch(fetchTopSalesFailure(message));
  }
};
export default topSaleSlice.reducer;
