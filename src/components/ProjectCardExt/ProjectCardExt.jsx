import { useParams } from "react-router";
import projects from "../Projects/projects.json";
import { useState } from "react";
import "./projectCardExt.css";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const ProjectCardExt = () => {
  const { project_name } = useParams();

  const [selectedProject, setSelectedProject] = useState(
    projects.find((project) => project.urlTitle === project_name) || {}
  );

  return (
    <section className="cardContainer">
      <h2>{selectedProject.title}</h2>
      <h3>{selectedProject.type} - {selectedProject.duration}</h3>
      <p>{selectedProject.description}</p>

      <Link to={selectedProject.githubLink} target="_blank" className="linkButton">
      <img className="githubLogo" src="../icons/github.svg" width="25" alt="github logo" />
        View the Github Repository
      </Link>

      <h3>Languages Used</h3>
      <section className="gridContainer">
        {selectedProject.languages.map((tech) => (
          <div key={tech.name}>
            <div className="iconContainer">
              <img src={tech.icon} width="50" alt={tech.name} />
            </div>
            <h4 className="techTitle">{tech.name}</h4>
          </div>
        ))}
      </section>
    </section>
  );
};

export default ProjectCardExt;
