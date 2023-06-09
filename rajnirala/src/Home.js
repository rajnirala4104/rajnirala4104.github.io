import './App.css';
import FirstImpression from './components/FirstImpression';
import NavBar from './components/NavBar';
import { useLocation } from "react-router-dom";
function Home() {

    const location = useLocation();
    return (
        <div className="App">
            <NavBar activeStatus={location.pathname}/>
            {/* <div className="container myWebAppContainer"> */}
                {<FirstImpression />}
            {/* </div> */}
        </div>
    );
}

export default Home;
