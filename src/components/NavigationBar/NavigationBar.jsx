import { Link } from "react-router-dom";
import "./navigationBar.css";

const NavBar = () => {
  return (
    <div className="header-card">
      <div className="header-content">
        <Link to={"/"}>
          <span>
            <h1>Michelle Bagot</h1>
            <h2>Junior Software Developer</h2>
          </span>
        </Link>
      </div>
      <section className="header-nav">
        <nav>
          <ul>
            <li>
              <Link to="/about-me" className="menuLink">
                <p>About Me</p>
              </Link>
            </li>
            <li>
              <Link to="/projects" className="menuLink">
                <p>Projects</p>
              </Link>
            </li>
            <li>
              <Link to="/resume" className="menuLink">
                <p>Resume</p>
              </Link>
            </li>
            <li>
              <Link to="/contact" className="menuLink">
                <p>Contact</p>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
};

export default NavBar;
