import AboutMeHeader from "../AboutMeHeader/AboutMeHeader";
import ComingSoon from "../ComingSoon/ComingSoon";
import Intro from "../Intro/Intro";
import ProjectHeader from "../ProjectHeader/ProjectHeader";
import ResumeHeader from "../ResumeHeader/ResumeHeader";
import './home.css'

const Home = () => {

  const projectHeader = './assets/project-header.png'
  return (
    <>
      <Intro/>
      <AboutMeHeader />
    <ProjectHeader />
 <ResumeHeader />
    </>
  );
};

export default Home;
