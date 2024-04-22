import projectData from './projects.json'
import './projects.css'

const Projects = () => {

    return (
        <>
        <p>This is the projects component</p>

{projectData.map((project) => (
<section key={project.title}>
    <h3>{project.title}</h3>
<ul>
    <li>{project.duration}</li>
    <li>{project.description}</li>
    <li><a href={project.githubLink} target='_blank'> {project.githubLink}</a></li>
    <section key={project.technologies}>
        {project.technologies.map((tech) => (
          <li>
        {tech}
        </li>  
        ))}
        
    </section>
</ul>
</section>
)

)}

        </>
    )

}

export default Projects