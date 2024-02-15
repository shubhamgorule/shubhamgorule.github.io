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
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import profile from "./assets/profile.svg";
function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "white",
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <div className="homepage">
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />
      {/* <div
        className="cursor"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
        }}
      ></div> */}
      <Routes>
        <Route path="/" element={<WIP />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/project/it-mis" element={<CaseStudy />} />
      </Routes>
    </div>
  );
}

export default App;
