import React, { Fragment } from "react";
import { VoiceIcon } from "../icons";

const AboutMe: React.FC = () => {
   const voiceHandler = () => {
      alert("I haven't built this feature yet but I'll build this soon");
   };

   return (
      <Fragment>
         <section className="my-2 lg:my-0 lg:h-full lg:w-[100%] lg:flex justify-center items-center relative bg-[#192524] text-[#d0d5ce]">
            <h2 className="text-lg lg:hidden px-2 z-10 sticky top-0 lg:top-16 bg-gray-300 ">
               <strong>About Me</strong>
               <span
                  onClick={voiceHandler}
                  className="text-xl absolute top-[15%] right-[3%] cursor-pointer text-slate-600 hover:text-slate-800 transition duration-300"
               >
                  <VoiceIcon />
               </span>
            </h2>
            <div className="lg:flex hidden lg:justify-center lg:items-center lg:w-[100%] absolute top-0">
               <span
                  onClick={voiceHandler}
                  className="text-xl absolute top-4 left-[3%] cursor-pointer text-slate-600 hover:text-slate-800 transition duration-300"
               >
                  <VoiceIcon />
               </span>
            </div>
            <div className="aboutContent flex justify-center items-center mx-2 lg:text-start text-justify lg:w-[50%]">
               <p className="my-2 lg:text-[18px] text-[14px]">
                  Hey there! 👋 I'm a full-stack developer with expertise in
                  multiple languages and frameworks.
                  <strong>
                     {" "}
                     I specialized in JavaScript and Python. I'm also
                     experienced in working with popular frameworks like
                     React.js, Express.js, and Node.js for the backend.
                  </strong>{" "}
                  When it comes to databases, I'm well-versed in MongoDB. As a{" "}
                  <strong>MERN Stack developer </strong>, I love creating
                  dynamic and interactive web applications. I Can't wait to
                  showcase my skills on my portfolio website! and one more thing
                  i'll share with you,
                  <strong>
                     {" "}
                     I am confident that I can contribute to the growth and
                     development of any organization.
                  </strong>{" "}
               </p>
            </div>
         </section>
      </Fragment>
   );
};

export default AboutMe;
