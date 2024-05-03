import { Link } from "react-router-dom";
import "./navigationBar.css";
import Header from "./Header";
import Menu from "./Menu";

const NavBar = () => {
  return (
    <div className="header-card">
      <Header />
      <hr />
      <Menu />
    </div>
  );
};

export default NavBar;
