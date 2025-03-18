import { useSelector } from "react-redux";

import { imageUri } from "../../env";

import { addToWatchlist, removeFromWatchlist } from "../redux/watchlistSlice";

import { useDispatch } from "react-redux";

export default function MovieCard({ movie }) {
  const { watchlist } = useSelector((state) => state.watchlist);
  const dispatch = useDispatch();
  const { backdrop_path, title } = movie;
  const movieUrl = `${imageUri}${backdrop_path}`;

  const movieInWatchlist = watchlist.filter((movieInList) => movieInList.id === movie.id);
  const isMovieInWatchist = movieInWatchlist.length > 0;

  return (
    <div
      className="relative bg-center bg-cover my-5 h-52 w-72 sm:h-52 sm:w-72 md:h-56 md:w-80 lg:h-64 lg:w-96 rounded-2xl hover:scale-110 duration-300"
      style={{ backgroundImage: `url(${movieUrl})` }}
    >
      <p className="absolute text-white bg-gray-900/70 top-0 w-full md:text-xl lg:text-2xl xl:text-2xl text-center py-[2%] ">
        {title}
      </p>
      {isMovieInWatchist ? (
        <i
          onClick={() => {
            dispatch(removeFromWatchlist(movie));
          }}
          className="fa-solid fa-xmark absolute text-white text-3xl p-3 right-0 bottom-0 hover:text-red-400 hover:cursor-pointer"
        ></i>
      ) : (
        <i
          onClick={() => {
            dispatch(addToWatchlist(movie));
          }}
          className="fa-solid fa-plus absolute text-white text-3xl p-3 right-0 bottom-0 hover:text-red-400 hover:cursor-pointer"
        ></i>
      )}
    </div>
  );
}
