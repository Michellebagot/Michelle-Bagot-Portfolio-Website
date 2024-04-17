import CTA from "../CTA/CTA";
import "./intro.css";

const Intro = () => {
  return (
    <>
      <div className="cardContainer">
        <div className="headshotDiv">
          <img
            src="./assets/MB-headshot.jpg"
            alt="Michelle Bagot Headshot"
            className="headshotImg"
          />
        </div>
        <div className="introTextDiv">
            <h2>Hey!</h2>
          <p className="inlineParagraph">I'm Michelle, {<CTA />}</p>
          <p>Explore my projects to see how I develop software solutions that streamline workflows and empower users.</p>
          <p>I'd love to work with you on your next project, so get in touch and lets chat about how I can help you create something amazing!</p>
        </div>
      </div>
    </>
  );
};

export default Intro;
