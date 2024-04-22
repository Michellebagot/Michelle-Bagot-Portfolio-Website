import projectData from "../Projects/projects.json";

const ProjectCard = ({project}) => {

    console.log(project)

    return (
        <>
        <section className="cardContainer">
        <h3>{project.title}</h3>
        <h5>{project.duration}</h5>
        <p>{project.abstract}</p>
        </section>
        </>
    )
}

export default ProjectCard