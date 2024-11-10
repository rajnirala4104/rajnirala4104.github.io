import { createContext } from "react";
import {
   AboutMeContextInterface,
   ConnectBtnPopupInterface,
   EducationSectionContextInterface,
   ExpertiseSectionContextInterface,
   ProjectPopupContextInterface,
   ProjectSectionContextInterface,
} from "../interfaces";

export const AboutMeContext = createContext<AboutMeContextInterface>({
   aboutMeContextOnOff: true,
   setAboutMeContextOnOff: () => false,
});
export const EducationSectionContext =
   createContext<EducationSectionContextInterface>({
      educationSectionOnOff: false,
      setEducationSectiOnOff: () => false,
   });

export const ProjectsSectorContext =
   createContext<ProjectSectionContextInterface>({
      projectSectionOnOff: false,
      setProjectSectionOnOff: () => false,
   });

export const ExpertiseSectionContext =
   createContext<ExpertiseSectionContextInterface>({
      expertiseSectionOnOff: false,
      setExpertiseSectionOnOff: () => false,
   });

export const ConnectBtnPopupContext = createContext<ConnectBtnPopupInterface>({
   connectBtnPopupOnOff: false,
   setConnectBtnPopupOnOff: () => false,
});

export const ProjectPopupContext = createContext<ProjectPopupContextInterface>({
   projectPopupOnOff: false,
   setProjectPopupOnOff: () => false,
});
