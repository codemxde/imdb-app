import { useState, useEffect } from "react";
import axios from "axios";

import Movies from "./Movies";
import Pagination from "./Pagination";

export default function DailyMovies() {
  const [pageNo, setPageNo] = useState(1);
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=${pageNo}`;
    axios
      .get(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDIyZWU1NWJkNWEzMWFkZTM1YWNlNzBmZjkyMDIzNSIsIm5iZiI6MTc0MTQ5OTI2Ny4wMTksInN1YiI6IjY3Y2QyYjgzNTlhZTAzZWZlMzJhNjVhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hLBenLrLG4KoZBBdxnjw2itzMUudCJY2jvpHxhRaK54",
        },
      })
      .then((response) => {
        setMovies(response.data?.results);
      })
      .catch((error) => {
        alert("Change your network please!");
      });
  }, [pageNo]);

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

  const navigateToNextPage = () => {
    const page = pageNo === 5 ? 5 : pageNo + 1;
    setPageNo(page);
  };

  const navigateToPreviousPage = () => {
    const page = pageNo === 1 ? 1 : pageNo - 1;
    setPageNo(page);
  };

  return (
    <div className="flex flex-col sm:gap-7">
      <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl big-shoulders-stencil-ogs text-center">
        Watch Now
      </h1>

      <div className="relative flex flex-col  ">
        {/* TMDB Asynchronous Movies */}
        <Movies
          movies={movies}
          watchlist={watchlist}
          add={addToWatchlist}
          remove={removeFromWatchlist}
        />
        <Pagination
          pageNo={pageNo}
          nextPage={navigateToNextPage}
          previousPage={navigateToPreviousPage}
        />
      </div>
    </div>
  );
}
