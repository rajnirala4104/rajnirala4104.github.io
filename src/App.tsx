import { Fragment, useState } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import {
   AboutMeContext,
   ConnectBtnPopupContext,
   EducationSectionContext,
   ExpertiseSectionContext,
   ProjectPopupContext,
   ProjectsSectionContext,
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

   const [projectPopupOnOff, setProjectPopupOnOff] = useState<boolean>(false);
   const [connectBtnPopupOnOff, setConnectBtnPopupOnOff] =
      useState<boolean>(false);
   return (
      <Fragment>
         <ConnectBtnPopupContext.Provider
            value={{ connectBtnPopupOnOff, setConnectBtnPopupOnOff }}
         >
            <ProjectPopupContext.Provider
               value={{ projectPopupOnOff, setProjectPopupOnOff }}
            >
               <ExpertiseSectionContext.Provider
                  value={{ expertiseSectionOnOff, setExpertiseSectionOnOff }}
               >
                  <ProjectsSectionContext.Provider
                     value={{ projectSectionOnOff, setProjectSectionOnOff }}
                  >
                     <EducationSectionContext.Provider
                        value={{
                           educationSectionOnOff,
                           setEducationSectiOnOff,
                        }}
                     >
                        <AboutMeContext.Provider
                           value={{
                              aboutMeContextOnOff,
                              setAboutMeContextOnOff,
                           }}
                        >
                           <RouterProvider router={_ROUTER} />
                        </AboutMeContext.Provider>
                     </EducationSectionContext.Provider>
                  </ProjectsSectionContext.Provider>
               </ExpertiseSectionContext.Provider>
            </ProjectPopupContext.Provider>
         </ConnectBtnPopupContext.Provider>
      </Fragment>
   );
}

export default App;
