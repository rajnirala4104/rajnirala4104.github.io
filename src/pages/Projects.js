import ProjectCard from "../components/ProjectCard";
import './css/Project.css'

export const Projects = (props) => {
    // const location = useLocation();
    return(
        <>
            <div className="container">
                <ProjectCard projectTitle={"this is project Name or Title"} projectDescription={"This is project Description"} projectGitHubLink={"https://www.github.com/rajnirala4104/"} projectHintImage={require('../Asserts/images/NoteApplicationProject.png')}/>
            </div>
        </>
    )
}
