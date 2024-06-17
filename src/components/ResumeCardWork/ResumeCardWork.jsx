import "./resumeCardWork.css";

const ResumeCardWork = ({ job }) => {
  return (
    <section className="cardContainer">
      <h3>
        {job.company} - {job.title}
      </h3>
      <h4>
        {job.startMonth} {job.startDate} - {job.endMonth} {job.endDate}
      </h4>
      <p>{job.description}</p>

      <section className="skillTags">
        <img
          className="githubLogo"
          src="../icons/briefcase.svg"
          width="25"
          alt="stack icon"
        />
        <p>Work Experience</p>
      </section>
    </section>
  );
};

export default ResumeCardWork;
