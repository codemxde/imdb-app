import Banner from "./Banner";
import DailyMovies from "./DailyMovies";

export default function Home() {
  return (
    // This is the wrapper for Showcase and New Movies
    <div className="flex flex-col gap-[12vw] sm:gap-[9vw]">
      <Banner />
      <DailyMovies />
    </div>
  );
}
