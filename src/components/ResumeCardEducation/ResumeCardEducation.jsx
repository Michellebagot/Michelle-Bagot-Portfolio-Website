import './resumeCardEducation.css'

const ResumeCardEducation = ({school}) => {

    console.log(school)

    return(
        <section>
            <hr></hr>
        <h3>{school.subject}</h3>
        <h4>{school.institution}</h4>
        <h4>{school.startDate} - {school.endDate}</h4>
        <h4>Grade: {school.grade}</h4>
        <p>{}</p>
        
        </section>
    )
}

export default ResumeCardEducation