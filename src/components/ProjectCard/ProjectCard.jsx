import { Link } from "react-router-dom";
const ProjectCard = ({ project }) => {
  return (
    <>
      <section className="cardContainer">
        <h3>{project.title}</h3>
        <h5>{project.duration}</h5>
        <p>{project.abstract}</p>

        <section>
          <Link to={`/projects/${project.urlTitle}`} key={project.title} className="linkButton">
            <img
              className="githubLogo"
              src="../icons/stack.svg"
              width="25"
              alt="stack icon"
            />
            View more details on this project
          </Link>
        </section>
      </section>
    </>
  );
};

export default ProjectCard;
