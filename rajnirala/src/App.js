import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import NoPage from './components/noPage';
import WhoAmI from './components/WhoAmI';
import MoreAboutMe from './components/MoreAboutMe';
import Education from './components/Education';
import Expertise from './components/Expertise';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/*" element={<NoPage />} />
        <Route exact path="/whoami" element={<WhoAmI/>} />
        <Route exact path="/moreaboutme" element={<MoreAboutMe/>} />
        <Route exact path="/education" element={<Education/>} />
        <Route exact path="/expertise" element={<Expertise/>} />
        <Route exact path="/projects" element={<Projects/>} />
      </Routes>
    </div>
  );
}

export default App;
