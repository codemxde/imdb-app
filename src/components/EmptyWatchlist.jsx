import empty from "../assets/empty.webp";

export default function EmptyWatchlist() {
  return (
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
