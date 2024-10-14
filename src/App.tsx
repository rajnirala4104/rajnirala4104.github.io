import { Fragment, useState } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import {
   AboutMeContext,
   EducationSectionContext,
   ExpertiesSectionContext,
   ProjectsSectonContext,
} from "./contexts";
import { _ROUTER } from "./router";

function App() {
   const [aboutMeContextOnOff, setAboutMeContextOnOff] =
      useState<boolean>(true);
   const [educationSectionOnOff, setEducationSectiOnOff] =
      useState<boolean>(false);
   const [projectSectionOnOff, setProjectSectionOnOff] =
      useState<boolean>(false);

   const [expertiseSectionOnOff, setExpertiseSectionOnOff] =
      useState<boolean>(false);

   return (
      <Fragment>
         <ExpertiesSectionContext.Provider
            value={{ expertiseSectionOnOff, setExpertiseSectionOnOff }}
         >
            <ProjectsSectonContext.Provider
               value={{ projectSectionOnOff, setProjectSectionOnOff }}
            >
               <EducationSectionContext.Provider
                  value={{ educationSectionOnOff, setEducationSectiOnOff }}
               >
                  <AboutMeContext.Provider
                     value={{ aboutMeContextOnOff, setAboutMeContextOnOff }}
                  >
                     <RouterProvider router={_ROUTER} />
                  </AboutMeContext.Provider>
               </EducationSectionContext.Provider>
            </ProjectsSectonContext.Provider>
         </ExpertiesSectionContext.Provider>
      </Fragment>
   );
}

export default App;
