import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="header-content">
      <Link to={"/"}>
        <span>
          <h1>Michelle Bagot</h1>
          <h2>Junior Software Developer</h2>
        </span>
      </Link>
    </div>
  );
};

export default Header;
