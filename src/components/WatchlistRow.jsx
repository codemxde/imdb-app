import { imageUri } from "../../env";
import genreids from "../constants/genres";

import { removeFromWatchlist } from "../redux/watchlistSlice";
import { useDispatch } from "react-redux";

export default function WatchlistRow({ movie }) {
  const dispatch = useDispatch();
  const { backdrop_path, title, vote_average, popularity, genre_ids } = movie;
  const genre = genreids[genre_ids[0]];
  const movieUrl = `${imageUri}${backdrop_path}`;
  return (
    <div className="contents">
      <div className="flex items-center relative w-full md:w-[80%] lg:w-[80%] xl:w-full">
        <div
          style={{ backgroundImage: `url(${movieUrl})` }}
          className="w-full h-[28vw] lg:h-[20vw] xl:h-[19vw] bg-center bg-cover rounded-2xl hover:scale-90 duration-300 group"
        >
          <div className="absolute hidden group-hover:flex right-0">
            <i
              className="fa-solid fa-xmark text-4xl p-3 hover:text-red-400 hover:cursor-pointer"
              onClick={() => {
                dispatch(removeFromWatchlist(movie));
              }}
            ></i>
          </div>
        </div>
        <p className="text-lg absolute text-center  bg-slate-900/70 w-[100%] p-3 top-0 xl:relative xl:left-0">
          {title}
        </p>
      </div>

      <div className="flex justify-center items-center">
        <p className="text-lg text-lime-300 font-semibold">{vote_average}</p>
      </div>

      <div className="flex justify-center items-center">
        <p className="text-lg text-lime-300 font-semibold">{popularity}</p>
      </div>

      <div className="flex justify-center items-center">
        <p className="text-lg text-lime-300 font-semibold">{genre}</p>
      </div>
    </div>
  );
}
