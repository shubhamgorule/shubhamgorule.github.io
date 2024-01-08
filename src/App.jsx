import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./styles/scrollbar.css";
import "./styles/navbar.css";
import "./styles/homepage.css";

import Homepage from "./pages/Homepage";
import WIP from "./pages/WIP";
function App() {
  return (
    <div className="homepage">
      <Routes>
        <Route path="/" element={<WIP />} />
        <Route path="/home" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
