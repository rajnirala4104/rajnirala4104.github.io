import React, { Fragment, useState } from "react";
import Typed from "typed.js";
import { allImages } from "../Asserts/images";

export const HeroComponents = () => {
   const [popup, setPopup] = useState(false);
   const el = React.useRef(null);

   React.useEffect(() => {
      const typed = new Typed(el.current, {
         strings: [
            "Javascript Enthusiast",
            "Python Enthusiast",
            "Curious Person",
            "Great Learner",
            "Backend Developer",
            "FullStack Developer",
         ],
         typeSpeed: 55,
      });

      return () => {
         typed.destroy();
      };
   }, []);

   return (
      <Fragment>
         <div className="profile flex flex-col justify-center items-end lg:hidden ">
            <div className="banner border-b-4 border-gray-400">
               <img
                  src={allImages.banneImage}
                  className="h-[11rem] w-screen"
                  alt=""
                  loading="lazy"
               />
            </div>
            <div className=" flex flex-row justify-between  w-full">
               <div
                  data-aos="fade-up"
                  className="nameAndAbout py-3 pl-3  w-full h-full"
               >
                  <h2 className="text-2xl md:text-5xl">
                     <strong>Raj Nirala</strong>
                  </h2>
                  <p className="md:my-2 text-[17px] md:text-xl text-gray-600 ">
                     A{" "}
                     <span
                        ref={el}
                        className="font-mono md:text-xl text-[15px]"
                     ></span>
                  </p>
                  <div className="icons flex justify-between w-36 ">
                     <a
                        href="https://www.linkedin.com/in/raj-nirala/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-800"
                     >
                        <i className="fa-brands text-2xl fa-linkedin"></i>
                     </a>
                     <a
                        href="https://www.github.com/rajnirala4104/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-800"
                     >
                        <i className="fa-brands text-2xl fa-github"></i>
                     </a>
                     <a
                        href="https://www.instagram.com/_raj_nirala_/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-800"
                     >
                        <i className="fa-brands text-2xl fa-instagram"></i>
                     </a>
                     <a
                        href="https://wa.me/917827424823/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-800"
                     >
                        <i className="fa-brands text-2xl fa-whatsapp"></i>
                     </a>
                  </div>
                  <div className="btns  flex justify-start py-2">
                     <button
                        onClick={() => alert("wow its working")}
                        className="bg-gray-500 text-[12px] md:text-[15px] py-1 px-2 mr-2 text-white rounded"
                     >
                        Let's Work
                     </button>
                     <button
                        onClick={() => setPopup(!popup)}
                        className="bg-gray-500 text-[12px] md:text-[15px] py-1 px-2 text-white rounded"
                     >
                        CV
                     </button>
                  </div>
               </div>
               <div className="profilePic border-4 bg-white w-[40%] rounded-full border-gray-400 -translate-y-[5.4rem]">
                  <img
                     src={allImages.rajProfileImage}
                     className="rounded-full"
                     alt="raj nirala"
                     loading="lazy"
                  />
               </div>
            </div>
         </div>
      </Fragment>
   );
};
