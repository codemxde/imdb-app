import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <img src="../assets/imdb-logo.png" alt="" />
          </Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/watchlist">Wachlist</Link>
        </li>
      </ul>
    </nav>
  );
}
