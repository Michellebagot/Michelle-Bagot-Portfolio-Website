import techData from "./techStack.json";
import "./techStack.css";

const TechStack = () => {
  return (
    <>
      <div className="cardContainer">
        <h2>Tech Stack</h2>
        <p>
          These are the techologies that I have used, and how confident I feel
          using them.
        </p>
        <div>
          {techData.map((tech) => (
            <div key={tech.title}>
              <h3>{tech.title}</h3>
              <ul>
                <div key={tech.title.name} className="grid-container">
                  {tech.skills.map((skill) => (
                    <li key={skill.name}>
                      <div className="iconContainer">
                        <img src={skill.icon} width="50" alt={skill.name} />
                      </div>
                      <li>
                        <h4 className="techTitle">{skill.name}</h4>
                      </li>
                      <li>
                        <p className="techTitle">Level: {skill.level}</p>
                      </li>
                    </li>
                  ))}
                </div>
              </ul>
            </div>
          ))}
        </div>
        <div>
          <h3>My Ranking System</h3>
          <ul>
            <li>Level 5 - Senior Developer</li>
            <li>Level 4 - Confident Developer</li>
            <li>Level 3 - Junior Developer</li>
            <li>Level 2 - "Straight outta bootcamp" Developer</li>
            <li>Level 1 - Newbie Developer</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default TechStack;
