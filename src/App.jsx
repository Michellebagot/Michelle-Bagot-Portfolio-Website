import "./App.css";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import AboutMe from "./components/AboutMe/AboutMe";
import NavBar from "./components/NavigationBar/NavigationBar";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import ProjectCardExt from "./components/ProjectCardExt/ProjectCardExt";
import ComingSoon from "./components/ComingSoon/ComingSoon";
import ImageCarousel from "./components/ImageCarousel/ImageCarousel";
import Resume from "./components/Resume/Resume";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<ComingSoon />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:project_name" element={<ProjectCardExt />} />
        <Route path="/contact" element={<ComingSoon />} />
        <Route path="/resume" element={<Resume />} />
        <Route path='/images'  element={<ImageCarousel />} />
      </Routes>

      <Footer className="footerComponent" />
    </>
  );
}

export default App;
