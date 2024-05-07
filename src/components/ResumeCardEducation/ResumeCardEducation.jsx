import './resumeCardEducation.css'

const ResumeCardEducation = ({school}) => {

console.log(school)
    return(
        <section className='cardContainer'>
        <h3>{school.institution} - {school.subject}</h3>
        <h4>{school.startDate} - {school.endDate}</h4>
        <h4>Grade: {school.grade}</h4>
        <section className='skillTags'>
        <img
              className="githubLogo"
              src="../icons/mortar-board.svg"
              width="25"
              alt="mortar board icon"
            />
        <p>Education</p>
        </section>
        
        </section>
    )
}

export default ResumeCardEducation