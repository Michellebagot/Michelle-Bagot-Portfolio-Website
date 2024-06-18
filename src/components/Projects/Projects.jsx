import projectDataImport from "../../data/projects.json";
import "./projects.css";
import ProjectCard from "../ProjectCard/ProjectCard";
import { useState, useEffect } from "react";

const Projects = () => {
  const [projectData, setProjectData] = useState(projectDataImport);

  useEffect(() => {
    const sortedData = [...projectData].sort((b, a) => a.id - b.id);
    setProjectData(sortedData);
  }, []);

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
