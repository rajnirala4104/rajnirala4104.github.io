import AOS from "aos";
import React, { Fragment, Suspense, createContext, useState } from "react";
import {
  AboutSection,
  ContactPopup,
  EducationSection,
  ExpertiseSection,
  HeroComponents,
  LargeHeroSection,
  MoreAboutMeSection,
  Popup,
  ProjectSection,
} from "../components";

export const ImagePopupContext = createContext(false);
export const ContactPopupContext = createContext(false)
export const Home = () => {
  document.title = "Raj Nirala";
  React.useEffect(() => {
    AOS.init();
  }, []);

  const [onPopup, setOnPopup] = useState(false);
  const [contactPopup, setContactPopup] = useState(false)
  return (
    <Fragment>
      <Suspense fallback="loading..">
        <ImagePopupContext.Provider value={{ onPopup, setOnPopup }}>
          <ContactPopupContext.Provider value={{ contactPopup, setContactPopup }}>
            {contactPopup ? <ContactPopup /> : ""}
            {onPopup ? <Popup /> : ""}
            <HeroComponents />
            <AboutSection />
            <EducationSection />
            <MoreAboutMeSection />
            <ExpertiseSection />
            <ProjectSection />
          </ContactPopupContext.Provider>
        </ImagePopupContext.Provider>
      </Suspense>
    </Fragment>
  );
};
