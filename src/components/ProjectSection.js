import React, { Fragment, Suspense } from "react";
import { ProjectsData } from "../data/ProjectsData";
import { ProjectsCard } from "./sub-components";

export const ProjectSection = () => {
   return (
      <Fragment>
         <Suspense fallback="loading..">
            <section className="px-3 my-2">
               <div className="">
                  <h2 className="text-2xl text-gray-900 px-2 z-20 sticky top-0 bg-gray-300 mb-2">
                     <strong>Projects</strong>
                  </h2>
                  <div className="projectCardContainer flex lg:flex-row lg:flex-wrap flex-col justify-center items-center">
                     {ProjectsData.map((DataKaSingleObject, i) => (
                        <Fragment key={i}>
                           <ProjectsCard {...DataKaSingleObject} />
                        </Fragment>
                     ))}
                  </div>
               </div>
            </section>
         </Suspense>
      </Fragment>
   );
};
