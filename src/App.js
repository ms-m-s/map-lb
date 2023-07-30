import { HashRouter, Routes, Route, BrowserRouter } from "react-router-dom";
import Map from "./Components/Map";
import North2 from "./Components/North2";
import Dinniyeh from "./Components/Dinniyeh";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Map />} />
        <Route path="/north2" element={<North2 />} />
        <Route path="/dinniyeh" element={<Dinniyeh />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
