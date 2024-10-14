import React, { Fragment, useContext } from "react";
import { AboutMe } from ".";
import {
   AboutMeContext,
   EducationSectionContext,
   ExpertiesSectionContext,
   ProjectsSectonContext,
} from "../contexts";
import { EducationSection } from "./EducationSection";

const MainContainer: React.FC = () => {
   const { aboutMeContextOnOff } = useContext(AboutMeContext);
   const { educationSectionOnOff } = useContext(EducationSectionContext);
   const { projectSectionOnOff } = useContext(ProjectsSectonContext);
   const { expertiseSectionOnOff } = useContext(ExpertiesSectionContext);

   console.log("About, Education, Project, Expertise");
   console.log(
      aboutMeContextOnOff,
      educationSectionOnOff,
      projectSectionOnOff,
      expertiseSectionOnOff
   );

   return (
      <Fragment>
         <div className="w-full h-full  grid place-content-center place-items-center bg-white ">
            {aboutMeContextOnOff && (
               <div className="w-full h-[83.5vh]">
                  <AboutMe />
               </div>
            )}
            {educationSectionOnOff && (
               <div className="w-full h-[83.5vh]">
                  <EducationSection />
               </div>
            )}
            {projectSectionOnOff && <span>Projects</span>}
            {expertiseSectionOnOff && <span>Expertise</span>}
         </div>
      </Fragment>
   );
};

export default MainContainer;
