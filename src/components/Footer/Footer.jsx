import "./footer.css";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <div className="footerContainer">
      <p>© Michelle Bagot 2024</p>
      <div className="socialIconsContainer">
        <SocialIcon
          className="socialIconsFooter"
          bgColor="white"
          fgColor="black"
          url="https://www.linkedin.com/in/michellebagot"
          target="_blank"
        />
        <SocialIcon
          className="socialIconsFooter"
          bgColor="white"
          fgColor="black"
          url="https://www.github.com/michellebagot"
          target="_blank"
        />
      </div>
    </div>
  );
};

export default Footer;
