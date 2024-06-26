import React, { Fragment, Suspense, useContext } from "react";
import Typed from "typed.js";
import { allImages } from "../assets/images";
import { Icons } from "./sub-components";
import { ContactPopupContext, ImagePopupContext } from "../contexts/indext";

export const LargeHeroSection = () => {
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


  const { contactPopup, setContactPopup } = useContext(ContactPopupContext)
  const { onPopup, setOnPopup } = useContext(ImagePopupContext);

  document.body.style.overflow = onPopup ? "hidden" : "auto";
  return (
    <Fragment>
      <Suspense fallback="loading..">
        <section id="home" className="h-[90.4vh] ">
          <div className="content flex justify-evenly items-center  h-full ">
            <div
              data-aos="fade-right"
              className="nameAndAbout py-3 pl-3 h-full w-[40%] flex justify-end items-center  "
            >
              <div className=" w-[75%] px-[2rem] ">
                <span
                  style={{
                    fontFamily: "'Dancing Script', cursive",
                    fontSize: "2rem",
                  }}
                  className="text-gray-500"
                >
                  Hii <span>──────</span>
                </span>
                <h2 className="text-2xl md:text-5xl lg:mb-2">
                  <span
                    style={{
                      fontFamily: "'Dancing Script', cursive",
                      fontSize: "40px",
                    }}
                    className="text-gray-500"
                  >
                    I'm
                  </span>
                  <strong> Raj Nirala</strong>
                </h2>
                <p className="md:my-2 lg:my-3 lg:text-[23px] md:text-xl text-gray-600 ">
                  A{" "}
                  <span
                    ref={el}
                    className="font-mono md:text-xl lg:text-[23px]"
                  ></span>
                </p>
                <div className="my-3">
                  <Icons color={"white"} />
                </div>

                <div className="btns space-x-3 flex justify-start py-2">
                  <button
                    onClick={() => setContactPopup(!contactPopup)}
                    className="bg-gray-500 hover:bg-gray-600 transi duration-200 lg:text-[20px] md:text-[15px] py-1 px-2 mr-2 text-white rounded"
                  >
                    Let's Work
                  </button>
                  <a
                    target="_black"
                    href="https://docs.google.com/document/d/1erh9VMHEh4H6Aek61cXj5w_x0RAoFA_n03WCV0Y7LXA/edit?usp=sharing"
                    className="bg-gray-500 hover:bg-gray-600 transitio duration-200 lg:text-[20px] md:text-[15px] py-1 px-2 text-white rounded"
                  >
                    Resume
                  </a>
                </div>
              </div>
            </div>
            <div data-aos="zoom-in" className="profilePic  bg-white w-[50%] h-[100%] flex justify-center items-end ">
              <img
                src={allImages.rajProfileImage}
                className=" w-[83%]"
                alt="raj nirala"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </Suspense>
    </Fragment>
  );
};
