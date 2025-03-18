import Movies from "./Movies";
import Pagination from "./Pagination";

export default function DailyMovies() {
  return (
    <div className="flex flex-col sm:gap-7">
      <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl big-shoulders-stencil-ogs text-center">
        Watch Now
      </h1>

      <div className="relative flex flex-col  ">
        {/* TMDB Asynchronous Movies */}
        <Movies />
        <Pagination />
      </div>
    </div>
  );
}
