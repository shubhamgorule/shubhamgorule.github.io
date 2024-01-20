import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./styles/scrollbar.css";
import "./styles/navbar.css";
import "./styles/homepage.css";
import "./styles/projectsection.css";
import "./styles/casestudy.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./pages/Homepage";
import WIP from "./pages/WIP";
import CaseStudy from "./components/CaseStudy";
function App() {
  return (
    <div className="homepage">
      <Routes>
        <Route path="/" element={<WIP />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/project/it-mis" element={<CaseStudy />} />
      </Routes>
    </div>
  );
}

export default App;
