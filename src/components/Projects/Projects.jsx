import projectData from "./projects.json";
import "./projects.css";
import { Link } from "react-router-dom";
import ProjectCard from "../ProjectCard/ProjectCard";
import { useState } from "react";

const Projects = () => {

const [selectedProject, setSelectedProject] = useState("")


  return (
    <>
<ul>

      {projectData.map((project) => (
     
              <Link to={`/projects/${project.urlTitle}`} key={project.title}>
                <ProjectCard project={project} />
            </Link>
    ))}
    </ul>
    </>
  );
};

export default Projects;
