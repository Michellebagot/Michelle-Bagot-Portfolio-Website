import { Link } from "react-router-dom";
import "./aboutMeHeader.css";

const AboutMeHeader = () => {
  return (
    <>
      <Link to={`/about-me/`}>
        <section className="aboutMeCardContainer">
          <h2>About Me</h2>
          <p>Get to know a little more about me</p>
        </section>
      </Link>
    </>
  );
};

export default AboutMeHeader;
