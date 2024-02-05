import React, { Fragment, Suspense } from "react";

export const Icons = (props) => {
   return (
      <Fragment>
         <Suspense fallback="loading..">
            <div className="icons flex justify-between w-36 lg:w-44 ">
               <a
                  href="https://www.linkedin.com/in/raj-nirala/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                     props.color === "white"
                        ? "text-gray-600 hover:text-gray-800"
                        : "text-gray-400 hover:text-white"
                  } `}
               >
                  <i className="fa-brands text-2xl lg:text-3xl fa-linkedin"></i>
               </a>
               <a
                  href="https://www.github.com/rajnirala4104/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                     props.color === "white"
                        ? "text-gray-600 hover:text-gray-800"
                        : "text-gray-400 hover:text-white"
                  } `}
               >
                  <i className="fa-brands text-2xl lg:text-3xl fa-github"></i>
               </a>
               <a
                  href="https://www.instagram.com/raj_nirala_910/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                     props.color === "white"
                        ? "text-gray-600 hover:text-gray-800"
                        : "text-gray-400 hover:text-white"
                  } `}
               >
                  <i className="fa-brands text-2xl lg:text-3xl fa-instagram"></i>
               </a>
               <a
                  href="https://wa.me/917827424823/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                     props.color === "white"
                        ? "text-gray-600 hover:text-gray-800"
                        : "text-gray-400 hover:text-white"
                  } `}
               >
                  <i className="fa-brands text-2xl lg:text-3xl fa-whatsapp"></i>
               </a>
            </div>
         </Suspense>
      </Fragment>
   );
};
