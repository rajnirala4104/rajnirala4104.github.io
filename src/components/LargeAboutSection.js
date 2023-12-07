import React, { Fragment, Suspense } from "react";
import { allImages } from "../Asserts/images";

export const LargeAboutSection = () => {
  return (
    <Fragment>
      <Suspense fallback="loading...">
        <div id="aboutSection" className="px-3 hidden lg:inline-block  ">
          <h2 className="text-2xl text-gray-900 px-2 z-10 sticky top-0 lg:top-16 bg-gray-300 ">
            <strong>About Me</strong>
          </h2>
          <div
            className="aboutContent flex justify-center items-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <p className="text-gray-600 my-2 text-[18px] text-start leading-7  w-[48%]">
              Hey there! 👋 I'm a full-stack developer with expertise in
              multiple languages and frameworks.
              <strong>
                {" "}
                I specialized in JavaScript, Python and little bit in C, Java,
                and Php. I'm also experienced in working with popular frameworks
                like Flask, React.js, Express.js, and Node.js for backend.
              </strong>{" "}
              When it comes to databases, I'm well-versed in MongoDB. As a{" "}
              <strong>MERN developer </strong>, I love creating dynamic and
              interactive web applications. Can't wait to showcase my skills on
              my portfolio website! and one more thing i'll tell you,
              <strong>
                {" "}
                I am confident that I can contribute to the growth and
                development of any organization.
              </strong>{" "}
            </p>
            <div className="img  w-[45%] mx-4 ">
              <img
                className=" w-full saturate-0 "
                src={allImages.rajniralasvg}
                alt=""
              />
            </div>
          </div>
        </div>
      </Suspense>
    </Fragment>
  );
};
