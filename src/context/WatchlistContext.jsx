import { createContext, useState, useEffect } from "react";

const WatchlistContext = createContext();

export default function WatchlistContextWrapper({ children }) {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("watchlist")) {
      localStorage.setItem("watchlist", "[]");
    }
    setWatchlist(JSON.parse(localStorage.getItem("watchlist")));
  }, []);

  const addToWatchlist = (movie) => {
    const updatedWatchlist = [...watchlist, movie];
    setWatchlist(updatedWatchlist);
    localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
  };

  const removeFromWatchlist = (movie) => {
    const updatedWatchlist = watchlist.filter(
      (movieInList) => movieInList.id !== movie.id
    );
    setWatchlist(updatedWatchlist);
    localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
  };

  return (
    <WatchlistContext.Provider value={{ watchlist, addToWatchlist, removeFromWatchlist }}>
      {children}
    </WatchlistContext.Provider>
  );
}
export { WatchlistContext };
