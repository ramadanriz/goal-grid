import Wrapper from "./components/Wrapper";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import League from "./pages/League";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leagues/:id" element={<Detail />} />
        <Route path="/leagues" element={<League />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Wrapper>
  );
}

export default App;
