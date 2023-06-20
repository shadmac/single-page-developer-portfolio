import NameHeader from "./components/DeveloperContent/NameHeader";
import RingsPattern from "./components/RingsPattern"
import DeveloperInfo from "./components/DeveloperInfo/DeveloperInfo";
import DevProfilePic from "./components/DeveloperInfo/DevProfilePic";
import ContactMeButton from "./components/Contact/ContactMeButton";
import TechStackExperience from "./components/DeveloperContent/TechStackExperience/TechStackExperience";
import ProjectsDisplay from "./components/DeveloperContent/ProjectsDisplay/ProjectsDisplay";

import './App.css'
import ContactInfo from "./components/Contact/ContactInfo";

const ringsPatternTopStyle = {
  height: '8.0625rem',
  width: '33.125rem',
  left: '-6.25rem',
  top: '8.3125rem',
  mixBlendMode: 'normal',
  opacity: 0.25,
  position: 'absolute',
}

const ringsPatternMiddleStyle = {
  height: '8.0625rem',
  width: '33.125rem',
  left: '71.8125rem',
  top: '67.3125rem',
  mixBlendMode: 'normal',
  opacity: 0.25,
  position: 'absolute',
}

const topContactBtnStyle = {
  position: "absolute",
  top: "35.4375rem",
  left: "10.3125rem",
}


function App() {
  return (
    <div className="appContainer">
      <NameHeader />
      <section style={ringsPatternTopStyle}>
        <RingsPattern />
      </section>
      <DeveloperInfo />
      <DevProfilePic />
      <section style={topContactBtnStyle} ><ContactMeButton /></section>
      <TechStackExperience />
      <section style={ringsPatternMiddleStyle} >
        <RingsPattern />
      </section>
      <ProjectsDisplay />
      <footer><ContactInfo /></footer>
    </div >
  );
}

export default App;


