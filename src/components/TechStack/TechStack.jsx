import techData from "../../data/techStack.json";
import "./techStack.css";

const TechStack = () => {
  return (
    <>
      <section className="cardContainer">
        <h2>Tech Stack</h2>
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
                    </li>
                  ))}
                </div>
              </ul>
            </div>
          ))}
      </section>
    </>
  );
};

export default TechStack;
