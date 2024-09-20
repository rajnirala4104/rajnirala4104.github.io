import React, { Fragment, Suspense } from "react";
import { EducationCard } from ".";
import { educationDetailsArr } from "../data/EducationData";

export const EducationSection: React.FC = () => {
   return (
      <Fragment>
         <Suspense fallback="loading...">
            <div id="educationSection" className="">
               <h2 className="text-lg text-gray-900 px-2 z-10 sticky top-0 lg:top-16 bg-gray-300 ">
                  <strong>Education</strong>
               </h2>
               <div className="educationContent text-gray-600  text-justify my-3 lg:flex justify-between items-center">
                  {educationDetailsArr.map((singleData, i) => (
                     <Fragment key={i}>
                        <EducationCard {...singleData} />
                     </Fragment>
                  ))}
               </div>
            </div>
         </Suspense>
      </Fragment>
   );
};
