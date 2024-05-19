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
import JobHunt from "./components/JobHunt/JobHunt";
import Loading from "./components/Loading/Loading";
import NotFound from "./components/NotFound/NotFound";


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
        <Route path="/job-hunt" element={<JobHunt />} />
        <Route path='/loading' element={<Loading/>} />

        <Route path="*" element={<NotFound />} />

      </Routes>

      <Footer className="footerComponent" />
    </>
  );
}

export default App;
