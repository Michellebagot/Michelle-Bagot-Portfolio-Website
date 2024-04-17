import "./App.css";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import React from "react";
import AboutMe from "./components/AboutMe/AboutMe";
import NavBar from "./components/NavigationBar/NavigationBar";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import TechStack from "./components/TechStack/TechStack";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/techStack" element={<TechStack />} />
      </Routes>

      <Footer className="footerComponent" />
    </>
  );
}

export default App;

// TODO add width adjustment for pages over xxx pixels wide
