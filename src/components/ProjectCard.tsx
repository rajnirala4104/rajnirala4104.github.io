import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { ProjectPopupContext } from "../contexts";
import { ProjectCardInterface } from "../interfaces";

const ProjectCard: React.FC<ProjectCardInterface> = (props) => {
   const { projectPopupOnOff, setProjectPopupOnOff } =
      useContext(ProjectPopupContext);
   return (
      <Fragment>
         <div
            onClick={() => setProjectPopupOnOff(!projectPopupOnOff)}
            className=" border-[#192524] p-4 my-3 w-[100%] h-full lg:w-[30%] lg:mx-2 lg:overflow-auto bg-[#3c5759] lg:cursor-pointer hover:shadow-lg transition duration-300 hover:backdrop-shadow-2xl rounded-md"
         >
            <img src={props.img} className="my-2" alt={props.projName} />
            <div className="projectCardContent">
               <h2 className="text-[18px] text-gray-700 lg:text-[#efece9]">{props.projName}</h2>
               <p className="text-gray-700 text-[13px] lg:text-[#efece9]">
                  {props.projDescription}
               </p>
            </div>
            <div className="btns mt-2">
               <Link
                  to={props.codeLink!}
                  target="_blank"
                  className="px-2 py-1 bg-gray-600 lg:bg-[#192524] lg:text-[#d0d5ce] text-white text-[15px] rounded-[5px]"
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
