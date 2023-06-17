import ProjectCard from "../components/ProjectCard";
import './css/Project.css'
import {data} from '../Data/ProjectCardData/projectCardData'


export const Projects = (props) => {
    return (
        <>
            <div className="container projectCardContainer">
                {
                    data.map((details, key) => 
                        <ProjectCard
                            key={key}
                            {...details}
                        />
                    )
                }
            </div>
        </>
    )
}
