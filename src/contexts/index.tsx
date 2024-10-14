import { createContext } from "react";
import {
   AboutMeContextInterface,
   EducationSectionContextInterface,
   ExpertiseSectionContextInterface,
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

export const ProjectsSectonContext =
   createContext<ProjectSectionContextInterface>({
      projectSectionOnOff: false,
      setProjectSectionOnOff: () => false,
   });

export const ExpertiesSectionContext =
   createContext<ExpertiseSectionContextInterface>({
      expertiseSectionOnOff: false,
      setExpertiseSectionOnOff: () => false,
   });
