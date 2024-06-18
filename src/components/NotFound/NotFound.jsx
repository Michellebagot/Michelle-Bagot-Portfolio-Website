import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <section className="lost">
      <h2>Hey, it looks like you're a little lost!</h2>
      <p>Let's help you find your way!</p>
      <p>Where would you like to go?</p>
      <ul>
        <li className="lostBullet">
          <Link to="/">
            <section className="linkButton">
              <img
                className="githubLogo"
                src="../icons/home.svg"
                width="25"
                alt="stack icon"
              />
              Click here to go 'Home'
            </section>{" "}
          </Link>
        </li>
        <li className="lostBullet">
          <Link to="/job-hunt">
            <section className="linkButton">
              <img
                className="githubLogo"
                src="../icons/briefcase.svg"
                width="25"
                alt="stack icon"
              />
              Looking for the super secret Job Hunting page?
            </section>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default NotFound;
