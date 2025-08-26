import React, { Fragment, useContext } from "react";
import Typed from "typed.js";
import {
   AboutMe,
   EducationSection,
   ExpertiseSection,
   MoreAboutMe,
   Projects,
   SingleMenuBar,
   SocialIcons,
} from ".";
import { ALL_IMAGES } from "../assets";
import {
   AboutMeContext,
   ConnectBtnPopupContext,
   CVPopupContext,
   EducationSectionContext,
   ExpertiseSectionContext,
   MoreAboutMeContext,
   ProfilePicturePopupContext,
   ProjectsSectionContext,
} from "../contexts";

const FloatingSideBar: React.FC = () => {
   const el = React.useRef(null);

   React.useEffect(() => {
      const typed = new Typed(el.current, {
         strings: [
            "Javascript Developer",
            "Python Enthusiast",
            "Curious Person",
            "Great Learner",
            "FullStack Developer",
         ],
         typeSpeed: 70,
      });

      return () => {
         typed.destroy();
      };
   }, []);

   const { aboutMeContextOnOff, setAboutMeContextOnOff } = useContext(AboutMeContext);
   const { educationSectionOnOff, setEducationSectiOnOff } = useContext(EducationSectionContext);
   const { projectSectionOnOff, setProjectSectionOnOff } = useContext(ProjectsSectionContext);
   const { expertiseSectionOnOff, setExpertiseSectionOnOff } = useContext(ExpertiseSectionContext);
   const { connectBtnPopupOnOff, setConnectBtnPopupOnOff } = useContext(ConnectBtnPopupContext);
   const { moreAboutMeContent, setMoreAboutMeContent } = useContext(MoreAboutMeContext)
   const { profilePicturePopupOnOff, setProfilePicturePopupOnOff } = useContext(ProfilePicturePopupContext)
   const { cvPopupOnOff, setCvPopupOnOff } = useContext(CVPopupContext);
   
   return (   
      <Fragment>
         <div className="w-full bg-white flex flex-col justify-start">
            <div className="header text-slate-800 border-b border-slate-600 h-[18rem] ">
               <div className="h-[9rem] lg:h-[40%]">
                  <img src={ALL_IMAGES.banner} className="w-full h-full object-cover" loading="lazy" alt="raj nirala" />
               </div>
               <div className="flex w-full">
                  <div className="w-[120%] flex flex-col px-2 my-2">
                     <span
                        style={{
                           fontFamily: "'Dancing Script', cursive",
                           fontWeight: "bolder",
                        }}
                        className="text-gray-500"
                     >
                        Hii.. I'm a
                     </span>
                     <div className=" text-gray-600 text-sm my-1">
                        <span ref={el} className="font-mono"></span>
                     </div>
                     <div className="my-1">
                        <SocialIcons classes="text-gray-60" />
                     </div>
                     <div className="flex justify-start my-2">
                        <button
                           onClick={() =>
                              setConnectBtnPopupOnOff(!connectBtnPopupOnOff)
                           }
                           className="border border-gray-600 font-medium px-2 py-1 text-sm rounded-sm hover:bg-gray-600 transition duration-200 hover:text-white shadow-lg"
                        >
                           Let's Connect
                        </button>
                        <button
                           onClick={() => setCvPopupOnOff(!cvPopupOnOff)}
                           className="bg-gray-600 text-white px-2 py-1 text-sm rounded-sm mx-2 shadow-lg hover:bg-gray-700">
                           CV                 
                        </button>
                        
                     </div>
                  </div>
                  <div className="flex flex-col justify-start items-center w-[80%] xl:w-[70%]  mx-3 -translate-y-[40%] ">
                     <div
                        onClick={() => setProfilePicturePopupOnOff(!profilePicturePopupOnOff)}
                        className="border-2 border-slate-400 bg-white rounded-full w-full shadow-xl cursor-pointer">
                        <img
                           className="w-full rounded-full"
                           loading="lazy"
                           src={ALL_IMAGES.rajniralaProfilePic}
                           alt="raj nirala"
                        />
                     </div>
                     <div className="mt-2">
                        <span className="text-[1.4rem] font-medium text-slate-800">
                           Raj Nirala
                        </span>
                     </div>
                  </div>
               </div>
            </div>
            <div className="menus mt-4 hidden lg:flex lg:flex-col">
               <div
                  onClick={() => {
                     setEducationSectiOnOff(false);
                     setProjectSectionOnOff(false);
                     setExpertiseSectionOnOff(false);
                     setAboutMeContextOnOff(true);
                     setMoreAboutMeContent(false)
                  }}
               >
                  <SingleMenuBar
                     menuTitle="About Me"
                     active={aboutMeContextOnOff}
                  />
               </div>
               <div
                  onClick={() => {
                     setAboutMeContextOnOff(false);
                     setProjectSectionOnOff(false);
                     setExpertiseSectionOnOff(false);
                     setEducationSectiOnOff(true);
                     setMoreAboutMeContent(false)
                  }}
               >
                  <SingleMenuBar
                     menuTitle="Education"
                     active={educationSectionOnOff}
                  />
               </div>
               <div
                  onClick={() => {
                     setAboutMeContextOnOff(false);
                     setEducationSectiOnOff(false);
                     setExpertiseSectionOnOff(false);
                     setProjectSectionOnOff(true);
                     setMoreAboutMeContent(false)
                  }}
               >
                  <SingleMenuBar
                     menuTitle="Projects"
                     active={projectSectionOnOff}
                  />
               </div>
               <div
                  onClick={() => {
                     setAboutMeContextOnOff(false);
                     setEducationSectiOnOff(false);
                     setProjectSectionOnOff(false);
                     setExpertiseSectionOnOff(true);
                     setMoreAboutMeContent(false)
                  }}
               >
                  <SingleMenuBar
                     menuTitle="Expertise"
                     active={expertiseSectionOnOff}
                  />
               </div>
               <div onClick={() => {
                  setMoreAboutMeContent(true)
                  setAboutMeContextOnOff(false);
                  setEducationSectiOnOff(false);
                  setProjectSectionOnOff(false);
                  setExpertiseSectionOnOff(false);
               }}>
                  <SingleMenuBar menuTitle="MoreAboutMe" active={moreAboutMeContent} />
               </div>
               <div className="lg:hidden">
                  <MoreAboutMe />
               </div>
            </div>
            <div className="lg:hidden">
               <AboutMe />
               <EducationSection />
               <Projects />
               <ExpertiseSection />
               <MoreAboutMe />
            </div>
         </div>
      </Fragment >
   );
};

export default FloatingSideBar;
