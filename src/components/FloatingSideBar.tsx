import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";
import { AboutMe, SingleMenuBar } from ".";
import { ALL_IMAGES } from "../assets";
import { EducationSection } from "./EducationSection";
import Projects from "./Projects";
import SocialIcons from "./SocialIcons";

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

   return (
      <Fragment>
         <div className="border w-full bg-white flex flex-col justify-start">
            <div className="header text-slate-800 border-b border-slate-600 h-[18rem] ">
               <div
                  className="h-[8rem] lg:h-[40%]"
                  style={{
                     background: `url(${ALL_IMAGES.banner}) center center/cover `,
                  }}
               ></div>
               <div className=" flex w-full">
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
                        <button className="border border-gray-600 font-medium px-2 py-1 text-sm rounded-sm hover:bg-gray-600 transition duration-200 hover:text-white shadow-lg">
                           Let's Connect
                        </button>
                        <button className="bg-gray-600 text-white px-2 py-1 text-sm rounded-sm mx-2 shadow-lg hover:bg-gray-700">
                           <Link
                              target="_black"
                              to="https://docs.google.com/document/d/1erh9VMHEh4H6Aek61cXj5w_x0RAoFA_n03WCV0Y7LXA/edit?usp=sharing"
                           >
                              CV
                           </Link>
                        </button>
                     </div>
                  </div>
                  <div className="flex flex-col justify-start items-center w-[80%] xl:w-[70%] mx-3 -translate-y-[4rem] ">
                     <div className="border-2 border-slate-400 bg-white rounded-full w-full shadow-xl">
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
               <SingleMenuBar menuTitle="About Me" />
               <SingleMenuBar menuTitle="Experties" />
               <SingleMenuBar menuTitle="Projects" />
               <SingleMenuBar menuTitle="More About Me" />
            </div>
            <div className="lg:hidden">
               <AboutMe />
               <EducationSection />
               <Projects />
            </div>
         </div>
      </Fragment>
   );
};

export default FloatingSideBar;
