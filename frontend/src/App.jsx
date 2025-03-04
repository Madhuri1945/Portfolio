import Navbar from "./components/Navbar";
import Body from "./components/Body";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
function App() {
  const [isTheme, setIsTheme] = useState(false);
  return (
    <>
      <Navbar isTheme={isTheme} setIsTheme={setIsTheme} />
      <Body isTheme={isTheme} />

      <About isTheme={isTheme} />
      <Skills isTheme={isTheme} />
      <Projects isTheme={isTheme} />
      <ContactMe isTheme={isTheme} />
    </>
  );
}

export default App;
