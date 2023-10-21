import AOS from "aos";
import React, { Fragment, Suspense, createContext, useState } from "react";
import {
   AboutSection,
   EducationSection,
   ExpertiseSection,
   HeroComponents,
   MoreAboutMeSection,
   Popup,
   ProjectSection,
} from "../components";

export const ImagePopupContext = createContext(false);
export const Home = () => {
   document.title = "Raj Nirala";
   React.useEffect(() => {
      AOS.init();
   }, []);

   const [onPopup, setOnPopup] = useState(false);

   return (
      <Fragment>
         <Suspense fallback="loading..">
            <ImagePopupContext.Provider value={{ onPopup, setOnPopup }}>
               {onPopup ? <Popup /> : ""}
               <HeroComponents />
               <AboutSection />
               <EducationSection />
               <MoreAboutMeSection />
               <ExpertiseSection />
               <ProjectSection />
            </ImagePopupContext.Provider>
         </Suspense>
      </Fragment>
   );
};
