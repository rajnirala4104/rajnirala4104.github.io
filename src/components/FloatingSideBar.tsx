import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
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
   EducationSectionContext,
   ExpertiseSectionContext,
   ProjectsSectorContext,
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

   const { aboutMeContextOnOff, setAboutMeContextOnOff } =
      useContext(AboutMeContext);
   const { educationSectionOnOff, setEducationSectiOnOff } = useContext(
      EducationSectionContext
   );
   const { projectSectionOnOff, setProjectSectionOnOff } = useContext(
      ProjectsSectorContext
   );
   const { expertiseSectionOnOff, setExpertiseSectionOnOff } = useContext(
      ExpertiseSectionContext
   );

   const { connectBtnPopupOnOff, setConnectBtnPopupOnOff } = useContext(
      ConnectBtnPopupContext
   );

   return (
      <Fragment>
         <div className="w-full bg-[#efece9] flex flex-col justify-start">
            <div className="header text-slate-800 border-b border-slate-600 h-[18rem] ">
               <div
                  className="h-[8rem] lg:h-[40%]"
               // style={{
               //    background: `url(${ALL_IMAGES.banner}) center center/cover `,
               // }}
               >
                  <img src={ALL_IMAGES.banner} alt="profileBanner" className="w-full h-full" loading="lazy" />
               </div>
               <div className="flex w-full">
                  <div className="w-[120%] flex flex-col px-2 my-2">
                     <span
                        style={{
                           fontFamily: "'Dancing Script', cursive",
                           fontWeight: "bolder",
                        }}
                        className="text-[#192524]"
                     >
                        Hii.. I'm a
                     </span>
                     <div className=" lg:text-[#192524] text-gray-600 text-sm my-1">
                        <span ref={el} className="font-mono"></span>
                     </div>
                     <div className="my-1">
                        <SocialIcons classes="lg:text-[#192524] hover:text-[#3c5759] text-gray-60" />
                     </div>
                     <div className="flex justify-start my-2">
                        <button
                           onClick={() =>
                              setConnectBtnPopupOnOff(!connectBtnPopupOnOff)
                           }
                           className="border border-[#192524] font-medium px-2 py-1 text-sm rounded-sm hover:bg-[#192524] transition duration-200 hover:text-[#efece9] shadow-lg"
                        >
                           Let's Connect
                        </button>
                        <button className="bg-[#192524] text-[#efece9] px-2 py-1 text-sm rounded-sm mx-2 shadow-lg hover:bg-[#3c5759]">
                           <Link
                              target="_black"
                              to="https://docs.google.com/document/d/1erh9VMHEh4H6Aek61cXj5w_x0RAoFA_n03WCV0Y7LXA/edit?usp=sharing"
                           >
                              CV
                           </Link>
                        </button>
                     </div>
                  </div>
                  <div className="flex flex-col justify-start items-center w-[80%] xl:w-[70%]  mx-3 lg:-translate-y-[4rem] -translate-y-[5rem] ">
                     <div className="border-2 border-slate-400 lg:border-[#192524] bg-white rounded-full w-full shadow-xl">
                        <img
                           className="w-full rounded-full"
                           loading="lazy"
                           src={ALL_IMAGES.rajniralaProfilePic}
                           alt="raj nirala"
                        />
                     </div>
                     <div className="mt-2">
                        <span className="text-[1.4rem] font-medium text-[#192524]">
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
                  }}
               >
                  <SingleMenuBar
                     menuTitle="Experties"
                     active={expertiseSectionOnOff}
                  />
               </div>
               <div>
                  <SingleMenuBar menuTitle="MoreAboutMe" />
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
      </Fragment>
   );
};

export default FloatingSideBar;
