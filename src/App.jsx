import "./App.css";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import AboutMe from "./components/AboutMe/AboutMe";
import NavBar from "./components/NavigationBar/NavigationBar";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import ProjectCardExt from "./components/ProjectCardExt/ProjectCardExt";
import Resume from "./components/Resume/Resume";
import ContactMe from "./components/ContactMe/ContactMe";

function App() {



  return (
    <>
      <NavBar />

      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/my-projects" element={<Projects />} />
        <Route path="/my-projects/:project_name" element={<ProjectCardExt />} />
        <Route path="/contact-me" element={<ContactMe />} />
        <Route path="/my-resume" element={<Resume />} />

      </Routes>

      <Footer className="footerComponent" />
    </>
  );
}

export default App;
