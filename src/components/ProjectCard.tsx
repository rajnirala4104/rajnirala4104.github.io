import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { ProjectCardInterface } from "../interfaces";

const ProjectCard: React.FC<ProjectCardInterface> = (props) => {
   return (
      <Fragment>
         <div className=" border p-4 my-3 w-[100%] lg:w-[30%] lg:mx-2 lg:overflow-auto bg-white">
            <img src={props.img} className="my-2" alt={props.projName} />
            <div className="projectCardContent">
               <h2 className="text-[18px] text-gray-700">{props.projName}</h2>
               <p className="text-gray-700 text-[13px]">
                  {props.projDescription}
               </p>
            </div>
            <div className="btns mt-2">
               <Link
                  to={props.codeLink!}
                  target="_blank"
                  className="px-2 py-1 bg-gray-600 text-white text-[15px] rounded-[5px]"
               >
                  {props.codeLink?.split("/")[2] === "github.com"
                     ? "Code"
                     : "Show"}
               </Link>
            </div>
         </div>
      </Fragment>
   );
};

export default ProjectCard;
