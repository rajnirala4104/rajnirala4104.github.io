import React, { Fragment, Suspense } from "react";
import { database, frameworkSkils, programingSkils } from "../data/SkillsData";
import { SkillsProgressBar } from "./sub-components";

export const ExpertiseSection = () => {
   return (
      <Fragment>
         <Suspense fallback="loading..">
            <section className="px-3">
               <h2 className="text-2xl text-gray-900 px-2 z-20 sticky top-0 bg-gray-300 mb-2">
                  <strong>Expertise</strong>
               </h2>
               <div className="skilsContainer my-5">
                  <span className="text-[20px] font-semibold">
                     Programming Languages
                  </span>
                  {programingSkils.map((singleObject) => (
                     <SkillsProgressBar {...singleObject} />
                  ))}
               </div>
               <div className="skilsContainer my-5">
                  <span className="text-[20px] font-semibold">Frameworks</span>
                  {frameworkSkils.map((singleObject) => (
                     <SkillsProgressBar {...singleObject} />
                  ))}
               </div>
               <div className="skilsContainer my-5">
                  <span className="text-[20px] font-semibold">Database</span>
                  {database.map((singleObject) => (
                     <SkillsProgressBar {...singleObject} />
                  ))}
               </div>
            </section>
         </Suspense>
      </Fragment>
   );
};
