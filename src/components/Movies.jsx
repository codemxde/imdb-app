import MovieCard from "./MovieCard";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import { moviesUri, token } from "../../env";

export default function Movies() {
  const { pageNo } = useSelector((state) => state.pagination);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const url = `${moviesUri}${pageNo}`;
    axios
      .get(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setMovies(response.data?.results);
      })
      .catch((error) => {
        alert("Change your network please!");
      });
  }, [pageNo]);

  return (
    <div className="flex flex-wrap justify-evenly gap-7">
      {movies.map((movie) => {
        return <MovieCard key={movie.id} movie={movie} />;
      })}
    </div>
  );
}
