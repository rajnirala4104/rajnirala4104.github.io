import React, { Fragment, Suspense } from "react";
import { data } from "../data/MoreAboutMe";
import MoreAboutMeCard from "./MoreAboutMeCard";

const MoreAboutMe: React.FC = () => {
   return (
      <Fragment>
         <Suspense fallback="loading..">
            <section id="moreAboutMeSection" className="flex flex-col ">
               <h2 className="text-lg text-gray-900 px-2 z-10 sticky top-0 bg-gray-300 mb-2">
                  <strong>More About Me</strong>
               </h2>
               <div className="flex flex-col justify-center flex-wrap items-center relative top-0">
                  {data.map((singleObject, i) => (
                     <Fragment key={i}>
                        <MoreAboutMeCard {...singleObject} />
                     </Fragment>
                  ))}
               </div>
            </section>
         </Suspense>
      </Fragment>
   );
};

export default MoreAboutMe;
