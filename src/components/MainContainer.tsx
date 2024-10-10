import React, { Fragment, useContext } from "react";
import { AboutMe } from ".";
import { AboutMeContext, EducationSectionContext } from "../contexts";
import { EducationSection } from "./EducationSection";

const MainContainer: React.FC = () => {
   const { aboutMeContextOnOff } = useContext(AboutMeContext);
   console.log(aboutMeContextOnOff);

   const { educationSectionOnOff } = useContext(EducationSectionContext);

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
         </div>
      </Fragment>
   );
};

export default MainContainer;
