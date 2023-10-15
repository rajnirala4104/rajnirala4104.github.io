import React, { Fragment, Suspense } from "react";
import { allProjectImages } from "../../Asserts/images/projectsImages";

export const ProjectsCard = () => {
   return (
      <Fragment>
         <Suspense fallback="loading...">
            <div className=" border p-2 my-2 w-[100%] lg:w-[30%] lg:mx-2">
               <img
                  src={allProjectImages.eLibWebImage}
                  className="my-2"
                  alt=""
               />
               <div className="projectCardContent">
                  <h2 className="text-[23px] text-gray-700">E-library</h2>
                  <p className="text-gray-700">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Maiores quis architecto nemo possimus quidem fugiat quam
                     similique ab ipsum maxime quisquam facere beatae neque
                     voluptas, a iusto qui necessitatibus. Porro.
                  </p>
               </div>
               <div className="btns mt-2">
                  <button className="px-2 py-1 bg-gray-600 text-white rounded-[5px]">
                     Code
                  </button>
               </div>
            </div>
         </Suspense>
      </Fragment>
   );
};
