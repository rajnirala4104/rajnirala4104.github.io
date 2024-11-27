import React, { Fragment } from "react";
import { ProgressBarProps } from "../interfaces";

const SkillCard: React.FC<ProgressBarProps> = (props) => {
   return (
      <Fragment>
         <div className="relative flex items-center justify-center w-36 h-36 mx-3 my-3 ">
            {/* Circular Background */}
            <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>

            {/* Circular Progress */}
            <div
               className={`absolute inset-0 rounded-full`}
               style={{
                  clipPath: `inset(0 ${
                     ((100 - props.progress) / 100) * 100
                  }% 0 0)`,
                  transition: "clip-path 1s ease",
                  border: "5px solid " + props.progressColor,
               }}
            ></div>

            <div className="flex justify-center items-center flex-col">
               {/* Icon in the middle */}
               <div className="flex justify-center items-center">
                  <img src={props.image} alt="raj nirala" className="w-[60%]" />
               </div>

               {/* Progress Text */}
               <div className="text-gray-600 text-lg font-bold">
                  {props.progress}%
               </div>
            </div>
         </div>
      </Fragment>
   );
};

export default SkillCard;
