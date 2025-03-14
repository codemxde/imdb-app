import { useEffect, useState } from "react";
import empty from "../assets/empty.webp";
import WatchlistHeaders from "./WatchlistHeaders";
import WatchlistRow from "./WatchlistRow";

export default function Watchlist() {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("watchlist")) {
      setWatchlist(JSON.parse(localStorage.getItem("watchlist")));
    }
  }, []);

  const removeFromWatchlist = (thisMovie) => {
    const updatedWatchlist = watchlist.filter((movie) => {
      return movie.id !== thisMovie.id;
    });
    localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
    setWatchlist(updatedWatchlist);
  };

  const displayWatchlist = watchlist.length > 0;

  return displayWatchlist ? (
    <div className=" mt-24 sm:mt-24 md:mt-28 lg:mt-28 xl:mt-28 my-8 mx-8 p-3 rounded-2xl grid grid-cols-[3fr,_repeat(3,_1fr)] sm:gap-x-3 sm:gap-y-5 sm:grid-cols-[4fr_repeat(3,_1fr)]">
      {/* Headers */}
      <WatchlistHeaders />

      {/* Rows */}
      {watchlist.map((movie) => {
        return <WatchlistRow key={movie.id} movie={movie} remove={removeFromWatchlist} />;
      })}
    </div>
  ) : (
    <div className="flex flex-col gap-14 justify-center items-center ">
      <h1 className="text-5xl mt-40 big-shoulders-stencil-ogs">Watchlist Empty! 😞</h1>
      <img
        src={empty}
        alt=""
        className="rounded-2xl sm:w-[50vw] xl:w-[40vw] 2xl:w-[35vw]"
      />
    </div>
  );
}
