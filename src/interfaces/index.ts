export interface Classes {
      classes?: string
}

export interface SingleMenuInterface {
      menuTitle?: string
      active?: boolean
}

export interface EducationCardInterface {
      title?: string,
      whereInfo?: string,
      description?: string,
      duration?: string
}

export interface ProjectCardInterface {
      img?: string,
      projName?: string,
      projDescription?: string,
      codeLink?: string
}

export interface MoreAboutMeCardInterface {
      cardTitle?: string,
      cardDescription?: string,
      cardImg?: string,
      voiceSound?: string
}

export interface AboutMeContextInterface {
      aboutMeContextOnOff: boolean,
      setAboutMeContextOnOff: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface EducationSectionContextInterface {
      educationSectionOnOff: boolean,
      setEducationSectiOnOff: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface ProjectSectionContextInterface {
      projectSectionOnOff: boolean,
      setProjectSectionOnOff: React.Dispatch<React.SetStateAction<boolean>>
}

export interface ExpertiseSectionContextInterface {
      expertiseSectionOnOff: boolean,
      setExpertiseSectionOnOff: React.Dispatch<React.SetStateAction<boolean>>
}

export interface ProjectPopupContextInterface {
      projectPopupOnOff: boolean,
      setProjectPopupOnOff: React.Dispatch<React.SetStateAction<boolean>>
}

export interface ProgressBarProps {
      progressColor: string;
      progress: number;
      image: string;
}