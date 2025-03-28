import React, { Fragment } from "react";
import { EducationCardInterface } from "../interfaces";

const EducationCard: React.FC<EducationCardInterface> = (props) => {
   return (
      <Fragment>
         <div className="relatives lg:w-[80%] hover:bg-gray-200 border flex flex-col rounded-xl bg-gray-100 bg-clip-border text-gray-700 shadow-lg m-3">
            <div className="p-3">
               <div className="-space-y-2 my-2">
                  <h5 className="mb-2 block font-sans text-[14px] lg:text-[18px] font-semibold text-left leading-snug tracking-normal text-blue-gray-900 antialiased">
                     {props.title}
                  </h5>
                  <p className="text-[12px] lg:text-[13px]">
                     {" "}
                     <i>{props.whereInfo}</i>
                  </p>
               </div>

               <p className="block font-sans text-[13px] lg:text-[17px] font-light leading-relaxed text-start antialiased">
                  {props.description}
               </p>
            </div>
         </div>
      </Fragment>
   );
};

export default EducationCard;
