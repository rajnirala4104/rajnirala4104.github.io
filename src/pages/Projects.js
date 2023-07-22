import { memo } from "react";
import { data } from "../Data/ProjectCardData/projectCardData";
import ProjectCard from "../components/ProjectCard";
import "./css/Project.css";

export const Projects = memo(() => {
   return (
      <>
         <div className="container projectCardContainer">
            {data.map((details, key) => (
               <ProjectCard key={key} {...details} />
            ))}
         </div>
      </>
   );
});
