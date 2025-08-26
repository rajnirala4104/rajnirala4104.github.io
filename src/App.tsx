import { Fragment, useState } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import {
   AboutMeContext,
   ConnectBtnPopupContext,
   CVPopupContext,
   CvViewerPopupContext,
   EducationSectionContext,
   ExpertiseSectionContext,
   MoreAboutMeContext,
   ProfilePicturePopupContext,
   ProjectPopupContext,
   ProjectsSectionContext,
} from "./contexts";
import { _ROUTER } from "./router";

function App() {
   const [aboutMeContextOnOff, setAboutMeContextOnOff] = useState<boolean>(true);
   const [educationSectionOnOff, setEducationSectiOnOff] = useState<boolean>(false);
   const [projectSectionOnOff, setProjectSectionOnOff] = useState<boolean>(false);
   const [expertiseSectionOnOff, setExpertiseSectionOnOff] = useState<boolean>(false);
   const [projectPopupOnOff, setProjectPopupOnOff] = useState<boolean>(false);
   const [connectBtnPopupOnOff, setConnectBtnPopupOnOff] = useState<boolean>(false);
   const [moreAboutMeContent, setMoreAboutMeContent] = useState<boolean>(false);
   const [profilePicturePopupOnOff, setProfilePicturePopupOnOff] = useState<boolean>(false);
   const [cvPopupOnOff, setCvPopupOnOff] = useState<boolean>(false);
   const [cvViewerPopupOnOff, setCvViewerPopupOnOff] = useState<boolean>(false);

   return (
      <Fragment>
         <ConnectBtnPopupContext.Provider value={{ connectBtnPopupOnOff, setConnectBtnPopupOnOff }}>
            <ProfilePicturePopupContext.Provider value={{ profilePicturePopupOnOff, setProfilePicturePopupOnOff }}>
               <MoreAboutMeContext.Provider value={{ moreAboutMeContent, setMoreAboutMeContent }}>
                  <ProjectPopupContext.Provider value={{ projectPopupOnOff, setProjectPopupOnOff }}>
                     <ExpertiseSectionContext.Provider value={{ expertiseSectionOnOff, setExpertiseSectionOnOff }}>
                        <ProjectsSectionContext.Provider value={{ projectSectionOnOff, setProjectSectionOnOff }}>
                           <EducationSectionContext.Provider value={{ educationSectionOnOff, setEducationSectiOnOff }}>
                              <AboutMeContext.Provider value={{ aboutMeContextOnOff, setAboutMeContextOnOff }}>
                                 <CVPopupContext.Provider value={{cvPopupOnOff, setCvPopupOnOff}}>
                                    <CvViewerPopupContext.Provider value={{cvViewerPopupOnOff, setCvViewerPopupOnOff}}>
                                       <RouterProvider router={_ROUTER} />
                                    </CvViewerPopupContext.Provider>
                                 </CVPopupContext.Provider>
                              </AboutMeContext.Provider>
                           </EducationSectionContext.Provider>
                        </ProjectsSectionContext.Provider>
                     </ExpertiseSectionContext.Provider>
                  </ProjectPopupContext.Provider>
               </MoreAboutMeContext.Provider>
            </ProfilePicturePopupContext.Provider>
         </ConnectBtnPopupContext.Provider>
      </Fragment>
   );
}

export default App;
