import { Link } from "react-router-dom";

import logo from "../assets/imdb-logo.png";

export default function Navbar() {
  return (
    <nav className="py-3 rounded-lg bg-black border-y-2 border-blue-700">
      <ul className="flex justify-around sm:px-28 md:px-32 lg:px-40 xl:px-52 ">
        <li className="flex justify-center items-center">
          <Link to="/">
            <img src={logo} alt="" width={"90px"} />
          </Link>
        </li>
        <li className="flex justify-center items-center hover:underline rounded-lg p-3">
          <Link className="font-bold text-white text-xl" to="/">
            Home
          </Link>
        </li>
        <li className="flex justify-center items-center hover:underline rounded-lg p-3">
          <Link className="font-bold text-white text-xl" to="/watchlist">
            Wachlist
          </Link>
        </li>
      </ul>
    </nav>
  );
}
