import Wrapper from "./components/Wrapper";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import League from "./pages/League";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Wrapper />}>
        <Route index element={<Home />} />
        <Route path="league" element={<League />} />
        <Route path="league/:id" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
