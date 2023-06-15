import NameHeader from "./components/DeveloperContent/NameHeader";
import RingsPattern from "./components/RingsPattern"
import DeveloperInfo from "./components/DeveloperInfo/DeveloperInfo";
import DevProfilePic from "./components/DeveloperInfo/DevProfilePic";
import ContactMeButton from "./components/Contact/ContactMeButton";
import TechStackExperience from "./components/DeveloperContent/TechStackExperience/TechStackExperience";

import './App.css'

function App() {
  return (
    <div className="appContainer">
      <NameHeader />
      <RingsPattern />
      <DeveloperInfo />
      <DevProfilePic />
      <ContactMeButton />
      <TechStackExperience />
    </div>
  );
}

export default App;
