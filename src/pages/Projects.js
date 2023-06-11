import NavBar from "../shared/NavBar";
import { useLocation } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import './css/Project.css'

export const Projects = (props) => {
    const location = useLocation();
    return(
        <>
            <NavBar activeStatus={location.pathname}/>
            <div className="container">
                <ProjectCard projectTitle={"this is project Name or Title"} projectDescription={"This is project Description"} projectGitHubLink={"https://www.github.com/rajnirala4104/"} projectHintImage={require('../Asserts/images/bookLover.jpg')}/>
            </div>
        </>
    )
}
