export default function Pagination({ pageNo, nextPage, previousPage }) {
  return (
    <div className="w-full sticky bottom-0 flex justify-between items-center px-5">
      {pageNo > 1 ? (
        <i
          className="fa-solid fa-arrow-left text-3xl text-white p-4 hover:cursor-pointer hover:scale-110 duration-200"
          onClick={previousPage}
        ></i>
      ) : (
        <i className="fa-solid fa-arrow-left text-3xl text-gray-400 p-4"></i>
      )}

      <span className="text-white text-2xl"></span>

      {pageNo < 5 ? (
        <i
          className="fa-solid fa-arrow-right text-3xl text-white p-4 hover:cursor-pointer hover:scale-110 duration-200"
          onClick={nextPage}
        ></i>
      ) : (
        <i className="fa-solid fa-arrow-right text-3xl text-gray-400 p-4"></i>
      )}
    </div>
  );
}
