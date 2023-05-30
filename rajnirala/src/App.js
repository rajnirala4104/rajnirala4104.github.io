import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import NoPage from './components/noPage';
import WhoAmI from './components/WhoAmI';
import MoreAboutMe from './components/MoreAboutMe';
import Education from './components/Education';
import Expertise from './components/Expertise';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <Routes>
      <Route exact path="/" Component={Home} />
      <Route exact path="/*" Component={NoPage} />
      <Route exact path="/whoami" Component={WhoAmI} />
      <Route exact path="/moreaboutme" Component={MoreAboutMe} />
      <Route exact path="/education" Component={Education} />
      <Route exact path="/expertise" Component={Expertise} />
      <Route exact path="/projects" Component={Projects} />
      <Route exact path="/contact" Component={Contact} />
    </Routes>
  );
}

export default App;
