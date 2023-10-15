import React, { Fragment } from "react";

export const SkillsProgressBar = (props) => {
   return (
      <Fragment>
         <div className="my-2  flex flex-col w-full overflow-hidden rounded bg-blue-gray-50 font-sans text-xs font-medium">
            <div className="name my-1">
               <span className="text-[17px] text-gray-800">
                  <i>{props.skillName}</i>
               </span>
            </div>
            <div
               className="flex h-full items-center justify-center overflow-hidden break-all bg-gray-500 text-white "
               style={{ width: `${props.percentage}%` }}
            >
               {props.percentage}%
            </div>
         </div>
      </Fragment>
   );
};
