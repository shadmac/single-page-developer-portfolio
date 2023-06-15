import NameHeader from "./components/NameHeader";
import RingsPattern from "./components/RingsPattern"
import DeveloperInfo from "./components/DeveloperInfo/DeveloperInfo";
import DevProfilePic from "./components/DevProfilePic";

import './App.css'

function App() {
  return (
    <div className="appContainer">
      <NameHeader />
      <RingsPattern />
      <DeveloperInfo />
      <DevProfilePic />
    </div>
  );
}

export default App;
