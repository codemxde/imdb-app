import { configureStore } from "@reduxjs/toolkit";

import paginationSlice from "./paginationSlice";
import watchlistSlice from "./watchlistSlice";

const store = configureStore({
  reducer: {
    pagination: paginationSlice,
    watchlist: watchlistSlice,
  },
});

export default store;
