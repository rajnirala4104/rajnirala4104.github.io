import AOS from "aos";
import "aos/dist/aos.css";
import React, { Fragment, Suspense } from "react";
import { AboutSection, EducationSection, HeroComponents } from "../components";

export const Home = () => {
   document.title = "Raj Nirala";
   React.useEffect(() => {
      AOS.init();
   }, []);
   return (
      <Fragment>
         <Suspense fallback="loading..s">
            <HeroComponents />
            <AboutSection />
            <EducationSection />
         </Suspense>
      </Fragment>
   );
};
