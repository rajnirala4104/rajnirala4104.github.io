import React, { Fragment, Suspense } from "react";

export const AboutSection = () => {
   return (
      <Fragment>
         <Suspense fallback="loading...">
            <div className=" border-red-500 px-3">
               <h2 className="text-2xl z-1 text-gray-900 px-2 sticky top-0 bg-gray-300 ">
                  <strong>About Me</strong>
               </h2>
               <div
                  className="aboutContent "
                  data-aos="fade-up"
                  data-aos-duration="1000"
               >
                  <p className="text-gray-600 my-2 text-justify ">
                     I am a Full-Stack developer with 3 years of experience and
                     proficiency in multiple programming languages and
                     frameworks, including{" "}
                     <strong>
                        {" "}
                        HTML, CSS, JavaScript, Node.js, Express.js, React Js,
                        Python, Flask, PHP, MySQL, MongoDB, SQLI, and Java
                     </strong>
                     . I am passionate about problem-solving and enjoy exploring
                     new places through traveling. My long-term goal is to
                     establish a successful tech business. With my expertise in
                     web development and problem-solving skills,{" "}
                     <strong>
                        {" "}
                        I am confident that I can contribute to the growth and
                        development of any organization.
                     </strong>{" "}
                     I am excited to continue learning and improving my skills
                     while working towards achieving my career aspirations.
                  </p>
               </div>
            </div>
         </Suspense>
      </Fragment>
   );
};
