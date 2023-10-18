import React, { Fragment, Suspense } from "react";
import { Link } from "react-router-dom";

export const ProjectsCard = (props) => {
   return (
      <Fragment>
         <Suspense fallback="loading...">
            <div className=" border p-2 my-2 w-[100%] lg:w-[30%] lg:mx-2">
               <img src={props.img} className="my-2" alt={props.projName} />
               <div className="projectCardContent">
                  <h2 className="text-[23px] text-gray-700">
                     {props.projName}
                  </h2>
                  <p className="text-gray-700">{props.projDescription}</p>
               </div>
               <div className="btns mt-2">
                  <Link
                     to={props.codeLink}
                     target="_blank"
                     className="px-2 py-1 bg-gray-600 text-white rounded-[5px]"
                  >
                     {props.codeLink.split("/")[2] !== "universallegalarena.com"
                        ? "Code"
                        : "Show"}
                  </Link>
               </div>
            </div>
         </Suspense>
      </Fragment>
   );
};
