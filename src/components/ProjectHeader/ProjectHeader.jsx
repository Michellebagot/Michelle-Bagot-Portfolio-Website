import { Link } from 'react-router-dom'
import './projectHeader.css'


const ProjectHeader = () => {

    return (
        <>
         <Link to={`/my-projects/`}>
        <section className='projectCardContainer'>
            <h2>Projects</h2>
            <p>Explore my projects</p>
        </section>
        </Link>
        </>
    )
}

export default ProjectHeader