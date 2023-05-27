import './App.css';
import FirstImpression from './components/FirstImpression';
import NavBar from './components/NavBar';

function Home() {
    return (
        <div className="App">
            <NavBar />
            <div className="container myWebAppContainer">
                {<FirstImpression />}
            </div>
        </div>
    );
}

export default Home;
