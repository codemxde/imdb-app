import { createSlice } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
  name: "pagination",
  initialState: { pageNo: 1 },
  reducers: {
    increment: (state) => {
      state.pageNo += 1;
    },
    decrement: (state) => {
      state.pageNo -= 1;
    },
  },
});

export const { increment, decrement } = paginationSlice.actions;
export default paginationSlice.reducer;
