import React, { Fragment, Suspense, useContext } from "react";
import { AboutMe, EducationSection, ExpertiseSection, Projects } from ".";
import {
   AboutMeContext,
   EducationSectionContext,
   ExpertiseSectionContext,
   ProjectsSectorContext,
} from "../contexts";

const MainContainer: React.FC = () => {
   const { aboutMeContextOnOff } = useContext(AboutMeContext);
   const { educationSectionOnOff } = useContext(EducationSectionContext);
   const { projectSectionOnOff } = useContext(ProjectsSectorContext);
   const { expertiseSectionOnOff } = useContext(ExpertiseSectionContext);

   return (
      <Fragment>
         <div className="w-full h-full  grid place-content-center place-items-center bg-[#192524] ">
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
                  <div className="w-full h-[83.5vh] bg-white">
                     <ExpertiseSection />
                  </div>
               </Suspense>
            )}
         </div>
      </Fragment>
   );
};

export default MainContainer;
