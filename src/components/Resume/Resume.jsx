import ResumeCardEducation from "../ResumeCardEducation/ResumeCardEducation";
import ResumeCardWork from "../ResumeCardWork/ResumeCardWork";
import resumeDataImport from "./resume.json";
import { useEffect, useState } from "react";

const Resume = () => {
  console.log(resumeDataImport.workExperience);
  const [resumeData, setResumeData] = useState(resumeDataImport)
  

  
    return (
      <>
      <section className="cardContainer">


      <h2>Work Experience</h2>
        <ul>
          {resumeData.workExperience.map((job) => (
              <ResumeCardWork job={job} key={job.title} />
            ))}
        </ul>
<h2>Education</h2>
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
