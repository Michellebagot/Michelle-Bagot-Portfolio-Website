import { Link } from "react-router-dom";
const ProjectCard = ({ project }) => {
  return (
    <>
      <section className="cardContainer">
        <h3>{project.title}</h3>
        <h4>{project.duration}</h4>
        <p>{project.abstract}</p>

        <section>
          <Link
            to={`/my-projects/${project.urlTitle}`}
            key={project.title}
            className="linkButton"
          >
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
