import { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./projectCardExt.css";
import projects from "../../data/projects.json";
import ScreenshotsCarousel from "../ScreenshotsCarousel/ScreenshotsCarousel";

const ProjectCardExt = () => {
  const { project_name } = useParams();

  const [selectedProject, setSelectedProject] = useState(
    projects.find((project) => project.urlTitle === project_name) || {}
  );

  return (
    <section className="cardContainer">
      <h2>{selectedProject.title}</h2>

      <h4>{selectedProject.duration}</h4>
      <h4>{selectedProject.type} </h4>

      <p>{selectedProject.description}</p>

      <h3>Project Links</h3>
      <Link
        to={selectedProject.githubLink}
        target="_blank"
        className="linkButton"
      >
        <img
          className="githubLogo"
          src="../icons/github.svg"
          width="25"
          alt="github logo"
        />
        View the Github Repository
      </Link>

      <Link
        to={selectedProject.demoLink}
        target="_blank"
        className="linkButton"
      >
        <img
          className="githubLogo"
          src="../icons/globe.svg"
          width="25"
          alt="globe icon"
        />
        View the Project
      </Link>

      <h3>Screenshots</h3>
      <p>Click on the image to enlarge</p>
      <ScreenshotsCarousel screenshots={selectedProject.screenshots} />

      <h3>Development Stack</h3>
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
      <section>
        <h3>Obstacles</h3>
        <p>{selectedProject.obstacles}</p>
      </section>
      <h3>Tools Used</h3>
      <section className="gridContainer">
        {selectedProject.tools.map((tool) => (
          <div key={tool.name}>
            <div className="iconContainer">
              <img src={tool.icon} width="50" alt={tool.name} />
            </div>
            <h4 className="techTitle">{tool.name}</h4>
          </div>
        ))}
      </section>
      <section>
        <h3>Skills Utilised & Developed</h3>

        <section>
          {selectedProject.skills.map((skill) => (
            <div className="skillTags" key={skill}>
              <p>{skill}</p>
            </div>
          ))}
        </section>
      </section>
    </section>
  );
};

export default ProjectCardExt;
