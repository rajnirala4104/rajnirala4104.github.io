import React, { Fragment, Suspense } from "react";
import { database, frameworkSkils, programingSkils } from "../data/SkillsData";
import { SkillsProgressBar } from "./sub-components";

export const ExpertiseSection = () => {
   return (
      <Fragment>
         <Suspense fallback="loading..">
            <section id="expertiseSection" className="px-3">
               <h2 className="text-2xl text-gray-900 px-2 z-10 sticky top-0 lg:top-16 bg-gray-300 mb-2">
                  <strong>Expertise</strong>
               </h2>
               <div className="skilsContainer my-5">
                  <span className="text-[20px] font-semibold">
                     Programming Languages
                  </span>
                  {programingSkils.map((singleObject, i) => (
                     <Fragment key={i}>
                        <SkillsProgressBar {...singleObject} />
                     </Fragment>
                  ))}
               </div>
               <div className="skilsContainer my-5">
                  <span className="text-[20px] font-semibold">Frameworks</span>
                  {frameworkSkils.map((singleObject, i) => (
                     <Fragment key={i}>
                        <SkillsProgressBar {...singleObject} />
                     </Fragment>
                  ))}
               </div>
               <div className="skilsContainer my-5">
                  <span className="text-[20px] font-semibold">Database</span>
                  {database.map((singleObject, i) => (
                     <Fragment key={i}>
                        <SkillsProgressBar {...singleObject} />
                     </Fragment>
                  ))}
               </div>
            </section>
         </Suspense>
      </Fragment>
   );
};
