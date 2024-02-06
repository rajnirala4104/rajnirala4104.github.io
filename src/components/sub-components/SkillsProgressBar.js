import React, { Fragment } from "react";
import { allSkillsImage } from "../../assets/images/skillsImages";

export const SkillsProgressBar = (props) => {
   return (
      <Fragment>
         <div data-aos="fade-right" className="my-2 flex flex-col overflow-hidden rounded bg-blue-gray-50 font-sans text-xs font-medium  w-[20%] mx-2">
            <div
               className="flex my-2 h-full items-center justify-start overflow-hidden break-al bg-white text-white "
               style={{ width: `${props.percentage}%` }}
            >
               <img className="bg-white w-[7rem]" src={props.logo} />
            </div>
         </div>
      </Fragment>
   );
};
