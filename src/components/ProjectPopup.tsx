import React, { Fragment, useContext } from "react";
import { ProjectPopupContext } from "../contexts";
import { CloseIcon } from "../icons";
import { ProjectCardInterface } from "../interfaces";

const ProjectPopup: React.FC<ProjectCardInterface> = (props) => {
   const { projectPopupOnOff, setProjectPopupOnOff } =
      useContext(ProjectPopupContext);

   return (
      <Fragment>
         <section
            className={`hidden  w-[100%] h-screen overflow-hidden backdrop-blur-sm bg-[rgba(43,43,43,0.25)] lg:flex justify-center items-center relative top-0 z-10`}
         >
            <div className={`bg-white w-[80%] h-[50%]`}>
               <span
                  onClick={() => setProjectPopupOnOff(!projectPopupOnOff)}
                  className="cursor-pointer text-3xl absolute top-2 right-2"
               >
                  <CloseIcon />
               </span>
               <span>{props.projName}</span>
            </div>
         </section>
      </Fragment>
   );
};

export default ProjectPopup;
