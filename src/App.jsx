import "./App.css";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import React from "react";
import AboutMe from "./components/AboutMe/AboutMe";
import NavBar from "./components/NavigationBar/NavigationBar";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import ProjectCardExt from "./components/ProjectCardExt/ProjectCardExt";
import ComingSoon from "./components/ComingSoon/ComingSoon";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<ComingSoon />} />
        <Route path="/projects" element={<ComingSoon />} />
        <Route path="/projects/:project_name" element={<ProjectCardExt />} />
        <Route path="/contact" element={<ComingSoon />} />
        <Route path="/resume" element={<ComingSoon />} />
      </Routes>

      <Footer className="footerComponent" />
    </>
  );
}

export default App;
