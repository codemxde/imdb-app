export default function Genres({ genreList, selectedGenre, changeSelectedGenre }) {
  return (
    <div className="flex gap-x-3 sm:gap-x-4 md:gap-x-7 lg:gap-x-10 xl:gap-x-14">
      {genreList.map((genre, index) => {
        const isActive = genre == selectedGenre;
        const buttonStyle = "rounded-lg p-2 md:p-3 md:rounded-xl lg:p-3 lg:rounded-xl";
        const bgColor = isActive ? "bg-slate-500" : "bg-blue-700";

        return (
          <button
            key={index}
            className={`${buttonStyle} ${bgColor}`}
            onClick={() => changeSelectedGenre(genre)}
          >
            {genre}
          </button>
        );
      })}
    </div>
  );
}
