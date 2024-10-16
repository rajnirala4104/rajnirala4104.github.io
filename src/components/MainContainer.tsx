import React, { Fragment, Suspense, useContext } from "react";
import { AboutMe, ExpertiseSection, Projects } from ".";
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
               <Suspense fallback={"loading.."}>
                  <div className="w-full h-[83.5vh]">
                     <AboutMe />
                  </div>
               </Suspense>
            )}
            {educationSectionOnOff && (
               <Suspense fallback={"loading.."}>
                  <div className="w-full h-[83.5vh]">
                     <EducationSection />
                  </div>
               </Suspense>
            )}
            {projectSectionOnOff && (
               <Suspense fallback={"loading.."}>
                  <div className="w-full h-[83.5vh] bg-white">
                     <Projects />
                  </div>
               </Suspense>
            )}
            {expertiseSectionOnOff && (
               <Suspense fallback={"loading.."}>
                  <div className="w-full h-[83.5vh]">
                     <ExpertiseSection />
                  </div>
               </Suspense>
            )}
         </div>
      </Fragment>
   );
};

export default MainContainer;
