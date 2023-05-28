import NavBar from "./NavBar";
import { useLocation } from "react-router-dom";

function Projects(props) {
    const location = useLocation();
    return(
        <>
            <NavBar activeStatus={location.pathname}/>
            These all are my Project = "empety"
        </>
    )
}

export default Projects;
