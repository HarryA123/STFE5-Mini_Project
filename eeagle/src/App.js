import Main from "./components/Main";
import Search from "./components/Search";
import Clip from "./components/Clip";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import NotFound from "./components/NotFound";

function App() {
  const history = useSelector((state) => state.keywords);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/search"
            element={history.length ? <Search /> : <Main />}
          />
          <Route path="/search?q=:id" element={<Search />} />
          <Route path="/clip" element={<Clip />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
