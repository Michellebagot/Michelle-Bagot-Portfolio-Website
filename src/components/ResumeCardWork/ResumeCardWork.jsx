import './resumeCardWork.css'

const ResumeCardWork = ({job}) => {

    console.log(job)

    return(
        <section >
        <hr></hr>
        <h3>{job.company}</h3>
        <h4>{job.title}</h4>
        <h4>{job.startMonth} {job.startDate} - {job.endMonth} {job.endDate}</h4>
        <p>{job.description}</p>
        
        </section>
    )
}

export default ResumeCardWork