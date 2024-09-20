import React, { Fragment } from "react";

const AboutMe: React.FC = () => {
   return (
      <Fragment>
         <section className="my-2">
            <h2 className="text-md text-gray-900 px-2 z-10 sticky top-0 lg:top-16 bg-gray-300 ">
               <strong>About Me</strong>
            </h2>
            <div
               className="aboutContent flex justify-center items-center mx-2"
               data-aos-duration="1000"
            >
               <p className="text-gray-600 my-2 text-[13px] text-justify">
                  Hey there! 👋 I'm a full-stack developer with expertise in
                  multiple languages and frameworks.
                  <strong>
                     {" "}
                     I specialized in JavaScript, Python and little bit in C,
                     Java, and Php. I'm also experienced in working with popular
                     frameworks like Flask, React.js, Express.js, and Node.js
                     for backend.
                  </strong>{" "}
                  When it comes to databases, I'm well-versed in MongoDB. As a{" "}
                  <strong>MERN Stack developer </strong>, I love creating
                  dynamic and interactive web applications. Can't wait to
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
