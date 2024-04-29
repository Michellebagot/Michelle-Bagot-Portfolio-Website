import { useParams } from "react-router";
import projects from "../Projects/projects.json";
import { useState } from "react";
import "./projectCardExt.css";
import { Link } from "react-router-dom";

const ProjectCardExt = () => {
  const { project_name } = useParams();

  const [selectedProject, setSelectedProject] = useState(
    projects.find((project) => project.urlTitle === project_name) || {}
  );


  return (
    <section className="cardContainer">
      <h2>{selectedProject.title}</h2>
<hr></hr>
      <h3>{selectedProject.duration}</h3>
      <h3>{selectedProject.type} </h3>
      
      <section>
        <ul>
        {selectedProject.description.map((line) => (
            <>
            {/* <br></br>             */}
            <li className="descBullets">{line}</li>
            </>
        ))}
        </ul>
      </section>
    

      <Link to={selectedProject.githubLink} target="_blank" className="linkButton">
      <img className="githubLogo" src="../icons/github.svg" width="25" alt="github logo" />
        View the Github Repository
      </Link>

      <Link to={selectedProject.demoLink} target="_blank" className="linkButton">
      <img className="githubLogo" src="../icons/globe.svg" width="25" alt="globe icon" />
        View the Project
      </Link>

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

        <section className="gridContainerx">
            {selectedProject.skills.map((skill) => (
                <div className="x">
                    <p>{skill}</p>
                </div>
            ))}
        </section>

      </section>
    </section>
  );
};

export default ProjectCardExt;
