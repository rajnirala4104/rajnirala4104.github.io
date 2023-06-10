import NavBar from "./NavBar";
import { useLocation } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import './css/Project.css'

function Projects(props) {
    const location = useLocation();
    return(
        <>
            <NavBar activeStatus={location.pathname}/>
            <div className="container">
                <ProjectCard projectTitle={"this is project Name or Title"} projectDescription={"This is project Description"} projectGitHubLink={"https://www.github.com/rajnirala4104/"} projectHintImage={require('./images/bookLover.jpg')}/>
            </div>
        </>
    )
}

export default Projects;
