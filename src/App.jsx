import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Watchlist from "./components/Watchlist";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
    </>
  );
}

export default App;
