import projectData from "./projects.json";
import "./projects.css";
import ProjectCard from "../ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <>
      <ul>
        {projectData.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </ul>
    </>
  );
};

export default Projects;
