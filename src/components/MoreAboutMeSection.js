import React, { Fragment, Suspense } from "react";
import { data } from "../data/MoreAboutImgData";
import { MoreAboutSecCard } from "./sub-components/MoreAboutSecCard";

export const MoreAboutMeSection = () => {
   console.log(data);

   return (
      <Fragment>
         <Suspense fallback="loading..">
            <section className="flex flex-col px-3">
               <h2 className="text-2xl text-gray-900 px-2 z-20 sticky top-0 bg-gray-300 ">
                  <strong>More About Me</strong>
               </h2>
               <div>
                  {data.map((singleObject) => (
                     <MoreAboutSecCard {...singleObject} />
                  ))}
               </div>
            </section>
         </Suspense>
      </Fragment>
   );
};
