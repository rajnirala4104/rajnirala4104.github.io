import AOS from "aos";
import React, { Fragment, Suspense, useState } from "react";
import {
  AboutSection,
  ContactPopup,
  EducationSection,
  ExpertiseSection,
  HeroComponents,
  MoreAboutMeSection,
  Popup,
  ProjectSection,
} from "../components";
import { ContactPopupContext, ImagePopupContext } from "../contexts/indext";

export const Home = () => {
  document.title = "Raj Nirala";
  React.useEffect(() => {
    AOS.init();
  }, []);

  const [onPopup, setOnPopup] = useState(false);
  const [contactPopup, setContactPopup] = useState(false);
  return (
    <Fragment>
      <Suspense fallback="loading..">
        <ImagePopupContext.Provider value={{ onPopup, setOnPopup }}>
          <ContactPopupContext.Provider value={{ contactPopup, setContactPopup }}>
            {contactPopup ? <ContactPopup /> : ""}
            {onPopup ? <Popup /> : ""}
            <div className="lg:w-[85rem] lg:mx-auto lg:border-l lg:border-r lg:border-gray-600">
              <HeroComponents />
              <AboutSection />
              <EducationSection />
              <ExpertiseSection />
              <ProjectSection />
              <MoreAboutMeSection />
            </div>
          </ContactPopupContext.Provider>
        </ImagePopupContext.Provider>
      </Suspense>
    </Fragment>
  );
};
