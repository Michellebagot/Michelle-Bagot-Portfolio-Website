import ResumeCardEducation from "../ResumeCardEducation/ResumeCardEducation";
import ResumeCardWork from "../ResumeCardWork/ResumeCardWork";
import resumeData from "../../data/resume.json";

const Resume = () => {
  return (
    <>
      <section>
        <ul>
          {resumeData.workExperience.map((job) => (
            <ResumeCardWork job={job} key={job.title} />
          ))}
        </ul>

        <ul>
          {resumeData.education.map((school) => (
            <ResumeCardEducation school={school} key={school.title} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default Resume;
