import { Link } from "react-router-dom";
import "./resumeHeader.css";

const ResumeHeader = () => {
  return (
    <>
      <Link to={`/my-resume/`}>
        <section className="resumeCardContainer">
          <h2>Resume</h2>
          <p>Find about more about my skills and experience</p>
        </section>
      </Link>
    </>
  );
};

export default ResumeHeader;
