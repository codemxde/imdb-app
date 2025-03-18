export default function WatchlistHeaders({ sortWatchlist }) {
  return (
    <div className="contents">
      <h1 className=" p-4 text-xl">Name</h1>
      <div className="flex items-center">
        <i
          className="fa-solid fa-arrow-down text-lg hover:cursor-pointer hover:text-blue-400"
          onClick={() => {
            sortWatchlist(false);
          }}
        ></i>
        <h1 className=" p-4 text-xl text-center">Ratings</h1>
        <i
          className="fa-solid fa-arrow-up text-lg hover:cursor-pointer hover:text-blue-400"
          onClick={() => {
            sortWatchlist();
          }}
        ></i>
      </div>
      <h1 className=" p-4 text-xl text-center">Popularity</h1>
      <h1 className=" p-4 text-xl text-center">Genre</h1>
    </div>
  );
}
