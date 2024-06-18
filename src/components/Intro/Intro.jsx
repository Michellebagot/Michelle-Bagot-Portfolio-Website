import { useState, useEffect } from "react";
import "./intro.css";

const Intro = () => {
  const adjectives = [
    "A Problem-Solver",
    "A Code Crafter",
    "A Junior Software Developer",
    "An Enthusiastic Collaborator",
    "An Innovative Thinker",
    "User Focused",
    "A Lifelong Learner",
  ];

  const [count, setCount] = useState(0);
  const [adjectiveState, setAdjectiveState] = useState(adjectives[count]);

  const updateAdjectives = () => {
    const newCount = (count + 1) % adjectives.length;
    setCount(newCount);
    setAdjectiveState(adjectives[newCount]);
  };

  const timeoutFunc = () => {
    setTimeout(updateAdjectives, 3000);
  };

  useEffect(() => {
    timeoutFunc();
  }, [adjectiveState]);

  return (
    <>
      <div className="introCardContainer">
        <div className="containerForFlex">
          <div className="headshotDiv">
            <img
              src="./assets/MB-headshot.jpg"
              alt="Michelle Bagot Headshot"
              className="headshotImg"
            />
          </div>
          <div className="introTextDiv">
            <h2>Hey!</h2>
            <p className="inlineParagraph">I'm Michelle, {adjectiveState}</p>
            <p>
              Explore my projects to see how I develop software solutions that
              streamline workflows and empower users.
            </p>
            <p>
              I'd love to work with you on your next project, so get in touch
              and lets chat about how I can help you create something amazing!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
