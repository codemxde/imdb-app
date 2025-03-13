export default function MovieCard({ movie, watchlist, add, remove }) {
  const { backdrop_path, original_title } = movie;
  const movieUrl = `https://image.tmdb.org/t/p/w500${backdrop_path}`;

  const movieInWatchlist = watchlist.filter((movieInList) => movieInList.id === movie.id);
  const isMovieInWatchist = movieInWatchlist.length > 0;

  return (
    <div
      className="relative bg-center bg-cover my-5 h-52 w-72 sm:h-52 sm:w-72 md:h-56 md:w-80 lg:h-64 lg:w-96 rounded-2xl hover:scale-110 duration-300"
      style={{ backgroundImage: `url(${movieUrl})` }}
    >
      <p className="absolute text-white bg-gray-900/70 top-0 w-full md:text-xl lg:text-2xl xl:text-2xl text-center py-[2%] ">
        {original_title}
      </p>
      {isMovieInWatchist ? (
        <i
          onClick={() => {
            remove(movie);
          }}
          className="fa-solid fa-xmark absolute text-white text-3xl p-3 right-0 bottom-0 hover:text-red-400"
        ></i>
      ) : (
        <i
          onClick={() => {
            add(movie);
          }}
          className="fa-solid fa-plus absolute text-white text-3xl p-3 right-0 bottom-0 hover:text-red-400"
        ></i>
      )}
      {/* <i className="fa-solid fa-plus absolute text-white text-3xl p-3 right-0 bottom-0 hover:text-red-400 "></i> */}
    </div>
  );
}
