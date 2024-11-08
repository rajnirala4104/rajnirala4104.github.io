import React, { Fragment } from "react";
import { ProjectsData } from "../data/ProjectData";
import ProjectCard from "./ProjectCard";

const Projects: React.FC = () => {
   return (
      <Fragment>
         <section id="projectSection" className="">
            <h2 className="text-lg text-[#192524] px-2 z-10 sticky top-0 bg-[#92a8a9]">
               <strong>Projects</strong>
            </h2>
            <div className="postContainer lg:flex lg:flex-wrap lg:justify-center lg:items-start lg:overflow-auto bg-[#192524]">
               {ProjectsData.map((singleProjectObject, i) => (
                  <Fragment key={i}>
                     <ProjectCard {...singleProjectObject} />
                  </Fragment>
               ))}
            </div>
         </section>
      </Fragment>
   );
};

export default Projects;
