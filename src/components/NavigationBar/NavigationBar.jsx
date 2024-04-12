import "./navigationBar.css";

//TODO unsure on headshot in header bar here.
//TODO links need adding in

const NavBar = () => {
  return (
    <div className="header-card">
      {/* <div className="headshot">
                <img src="./public/assets/MB-headshot.jpg" alt="Michelle Bagot - Headshot" width='100px' />
            </div> */}
      <div className="header-content">
        <h1>Michelle Bagot</h1>
        <h2>Junior Software Engineer</h2>
      </div>
      <div className="header-nav">
        <nav>
          <ul>
            <li>
              <a href="#about-me">About Me</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Resume</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
