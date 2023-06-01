import NavBar from "./NavBar";
import { useLocation } from "react-router-dom";
import './css/Expertise.css'

function Expertise(props) {
    const location = useLocation();
    return (
        <>
            <NavBar activeStatus={location.pathname} />
            <div className="container ExpertiesContainer">
                <div className="MySkillsContainer">

                    <div className="skill">
                        <div className="outer">
                            <div className="inner">
                                <div id="number">
                                    80%
                                </div>
                            </div>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                        <defs>
                            <linearGradient id="GradientColor">
                                <stop offset="0%" stop-color="#e91e63" />
                                <stop offset="100%"stop-color="#673ab7" />
                            </linearGradient>
                        </defs>
                        <circle cx="80" cy="80" r="60" stroke-linecap="round" />
                    </svg>
                </div>
            </div>
        </>
    )
}

export default Expertise
