import React, { Fragment, Suspense } from "react";
import { EducationCard } from ".";
import { educationDetailsArr } from "../data/EducationData";

const EducationSection: React.FC = () => {
   return (
      <Fragment>
         <Suspense fallback="loading...">
            <div
               id="educationSection"
               className=" lg:h-full lg:flex lg:flex-col lg:justify-center lg:items-center"
            >
               <h2 className="text-lg text-[#d0d5ce] px-2 z-10 sticky top-0 lg:top-0 bg-gray-300 lg:bg-transparent lg:text-3xl lg:h-20 lg:flex lg:justify-center lg:items-center">
                  <strong>Education</strong>
               </h2>
               <div className="educationContent text-gray-600  text-justify my-3 lg:flex lg:flex-col justify-between items-center">
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

export default EducationSection;
