import { Link } from "react-router-dom";
import './menu.css'

const Menu = () => {

    return (
        <section className="menu-nav">
        <ul className="menu-ul">
          <li className="menu-li">
            <Link to="/about-me" className="menu-link">
              <p>About Me</p>
            </Link>
          </li>
          <li className="menu-li">
            <Link to="/my-projects" className="menu-link">
              <p>Projects</p>
            </Link>
          </li>
          <li className="menu-li">
            <Link to="/my-resume" className="menu-link">
              <p>Resume</p>
            </Link>
          </li>
          <li className="menu-li">
            <Link to="/contact-me" className="menu-link">
              <p>Contact</p>
            </Link>
          </li>
        </ul>
    </section>

    )
}

export default Menu