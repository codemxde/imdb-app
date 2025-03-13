import MovieCard from "./MovieCard";

export default function Movies({ movies, watchlist, add, remove }) {
  return (
    <div className="flex flex-wrap justify-evenly gap-7">
      {movies.map((movie) => {
        return (
          <MovieCard
            key={movie.id}
            movie={movie}
            watchlist={watchlist}
            add={add}
            remove={remove}
          />
        );
      })}
    </div>
  );
}
