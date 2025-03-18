import { createSlice } from "@reduxjs/toolkit";

const initializeWatchlist = () => {
  if (!localStorage.getItem("watchlist")) {
    localStorage.setItem("watchlist", "[]");
    return [];
  }
  return JSON.parse(localStorage.getItem("watchlist"));
};

const watchlist = createSlice({
  name: "watchlist",
  initialState: {
    watchlist: initializeWatchlist(),
  },
  reducers: {
    addToWatchlist: (state, action) => {
      const updatedWatchlist = [...state.watchlist, action.payload];
      localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
      state.watchlist = updatedWatchlist;
    },
    removeFromWatchlist: (state, action) => {
      const filteredWatchlist = [...state.watchlist].filter((movie) => {
        return movie.id !== action.payload.id;
      });
      localStorage.setItem("watchlist", JSON.stringify(filteredWatchlist));
      state.watchlist = filteredWatchlist;
    },
    setSortedwatchlist: (state, action) => {
      state.watchlist = action.payload;
      localStorage.setItem("watchlist", JSON.stringify(action.payload));
    },
  },
});

export const { addToWatchlist, removeFromWatchlist, setWatchlist, setSortedwatchlist } =
  watchlist.actions;

export default watchlist.reducer;
