import React, { Fragment, Suspense } from "react";
import { EducationCard } from "./sub-components/index";

export const EducationSection = () => {
   return (
      <Fragment>
         <Suspense fallback="loading...">
            <div className="px-3 my-3">
               <h2 className="text-2xl text-gray-900 px-2 sticky top-0 bg-gray-300 ">
                  <strong>Education</strong>
               </h2>
               <div className="educationContent text-gray-600 my-2 text-justify">
                  <EducationCard />
                  <EducationCard />
                  <EducationCard />
                  <EducationCard />
                  <EducationCard />
                  <EducationCard />
               </div>
            </div>
         </Suspense>
      </Fragment>
   );
};
