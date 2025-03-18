import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Watchlist from "./components/Watchlist";
import WatchlistContextWrapper from "./context/WatchlistContext";

import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <>
      <Navbar />
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
