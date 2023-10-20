import Wrapper from "./components/Wrapper";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import League from "./pages/League";

function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/league" element={<League />} />
      </Routes>
    </Wrapper>
  );
}

export default App;
