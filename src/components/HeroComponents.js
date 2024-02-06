import React, { Fragment, useContext } from "react";
import Typed from "typed.js";
import { allImages } from "../assets/images";
import { LargeHeroSection } from "./LargeHeroSection";
import { Icons } from "./sub-components";
import { ContactPopupContext, ImagePopupContext } from "../contexts/indext";

export const HeroComponents = () => {
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
         typeSpeed: 55,
      });

      return () => {
         typed.destroy();
      };
   }, []);

   const { onPopup, setOnPopup } = useContext(ImagePopupContext);
   const { contactPopup, setContactPopup } = useContext(ContactPopupContext)

   return (
      <Fragment>

         <div className="profile flex flex-col justify-center items-end  lg:hidden ">
            <div className="banner border-b-4 border-gray-400 lg:hidden">
               <img
                  src={allImages.banneImage}
                  className="h-[11rem] w-screen"
                  alt="raj nirala"
                  loading="lazy"
               />
            </div>
            <div className="w-full flex justify-start relative">
               <div data-aos="fade-up" className="nameAndAbout py-3 pl-3">
                  <h2 className="text-2xl md:text-5xl">
                     <strong>Raj Nirala</strong>
                  </h2>
                  <p className="md:my-2 text-[17px] md:text-xl text-gray-600 ">
                     A <span ref={el} className="font-mono md:text-xl"></span>
                  </p>

                  <Icons color={"white"} />

                  <div className="btns  flex justify-start py-2">
                     <button
                        onClick={() => setContactPopup(!contactPopup)}
                        className="bg-gray-500 text-[12px] md:text-[15px] py-1 px-2 mr-2 text-white rounded"
                     >
                        Let's Work
                     </button>
                     <a
                        target="_black"
                        href="https://docs.google.com/document/d/1erh9VMHEh4H6Aek61cXj5w_x0RAoFA_n03WCV0Y7LXA/edit?usp=sharing"
                        className="bg-gray-500 text-[12px] md:text-[15px] py-1 px-2 text-white rounded"
                     >
                        CV
                     </a>
                  </div>
               </div>
               <div data-aos="fade-left" className="profilePic absolute -top-1/2 left-[61%] border-4 bg-white w-[39%] rounded-full border-gray-400 flex justify-center items-end ">
                  <img
                     src={allImages.rajProfileImage}
                     onClick={() => setOnPopup(!onPopup)}
                     className="rounded-full cursor-pointer"
                     alt="raj nirala"
                     loading="lazy"
                  />
               </div>
            </div>
         </div>
         <div className="hidden lg:inline">
            {/* ------- hero for desktop size screen ------------ */}
            <LargeHeroSection />
         </div>
      </Fragment>
   );
};
