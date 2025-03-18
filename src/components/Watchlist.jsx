import { useEffect, useState } from "react";

import WatchlistHeaders from "./WatchlistHeaders";
import WatchlistRow from "./WatchlistRow";

import genreids from "../constants/genres";
import Genres from "./Genres";
import EmptyWatchlist from "./EmptyWatchlist";

import { useSelector, useDispatch } from "react-redux";
import { setSortedwatchlist } from "../redux/watchlistSlice";

export default function Watchlist() {
  const { watchlist } = useSelector((state) => state.watchlist);
  const [typeValue, setTypeValue] = useState("");
  const [genreList, setGenreList] = useState(["All Genres"]);
  const [selectedGenre, setSelectedGenre] = useState("All Genres");

  const dispatch = useDispatch();

  useEffect(() => {
    let genres = watchlist.map((movie) => {
      return genreids[movie.genre_ids[0]];
    });

    genres = new Set(genres);
    setGenreList(["All Genres", ...genres]);
  }, [watchlist]);

  const changeSelectedGenre = (genre) => {
    setSelectedGenre(genre);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setTypeValue(value);
  };

  const sortWatchlist = (isAscending = true) => {
    const movies = JSON.parse(localStorage.getItem("watchlist"));

    for (let i = 0; i < movies.length; i++) {
      for (let j = i; j > 0; j--) {
        const conditional = isAscending
          ? movies[j - 1].vote_average > movies[j].vote_average
          : movies[j - 1].vote_average < movies[j].vote_average;

        if (conditional) {
          [movies[j], movies[j - 1]] = [movies[j - 1], movies[j]];
        } else {
          break;
        }
      }
    }

    dispatch(setSortedwatchlist(movies));
  };

  const displayWatchlist = watchlist.length > 0;

  return displayWatchlist ? (
    <div className="flex flex-col items-center gap-y-10 sm:gap-y-12 md:gap-y-14 lg:gap-y-16 mt-36 sm:mt-36 md:mt-36 lg:mt-40 xl:mt-44">
      {/* Filer By genre */}
      <Genres
        genreList={genreList}
        selectedGenre={selectedGenre}
        changeSelectedGenre={changeSelectedGenre}
      />

      {/* Search Watchlist */}
      <input
        type="text"
        placeholder="Start Searching..."
        value={typeValue}
        onChange={handleSearch}
        className="text-black rounded-lg p-2 focus:outline-none focus-visible:border-2 focus-visible:border-blue-400"
      />

      <div className="w-[80%] rounded-2xl grid grid-cols-[3fr,_repeat(3,_1fr)] sm:gap-x-3 sm:gap-y-5 sm:grid-cols-[4fr_repeat(3,_1fr)]">
        {/* Headers */}
        <WatchlistHeaders sortWatchlist={sortWatchlist} />

        {/* Rows */}
        {watchlist
          .filter((movie) => {
            if (selectedGenre === "All Genres") {
              return true;
            } else {
              return genreids[movie.genre_ids[0]] === selectedGenre;
            }
          })
          .filter((movie) => {
            return movie.original_title.toLowerCase().includes(typeValue.toLowerCase());
          })
          .map((movie) => {
            return <WatchlistRow key={movie.id} movie={movie} />;
          })}
      </div>
    </div>
  ) : (
    <EmptyWatchlist />
  );
}
