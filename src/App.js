import { HashRouter, Routes, Route } from "react-router-dom";
import Map from "./Components/Map";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Map />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
