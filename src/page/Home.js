import AOS from "aos";
import React, { Fragment, Suspense } from "react";
import {
   AboutSection,
   EducationSection,
   ExpertiseSection,
   HeroComponents,
   MoreAboutMeSection,
   ProjectSection,
} from "../components";

export const Home = () => {
   document.title = "Raj Nirala";
   React.useEffect(() => {
      AOS.init();
   }, []);
   return (
      <Fragment>
         <Suspense fallback="loading..">
            <HeroComponents />
            <AboutSection />
            <EducationSection />
            <MoreAboutMeSection />
            <ExpertiseSection />
            <ProjectSection />
         </Suspense>
      </Fragment>
   );
};
