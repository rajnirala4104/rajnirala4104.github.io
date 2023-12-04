import React, { Fragment, Suspense } from "react";
import { EducationCard } from "./sub-components/index";

export const EducationSection = () => {
   const educationDetailsArr = [
      {
         title: "Diploma in Computer Science",
         whereInfo: "DSEU Univercity | Shakarpur Campus",
         description:
            "I build some strong academic foundations and an extensive professional network.",

         duration: "2021-2024",
      },
      {
         title: "Secondary Education",
         whereInfo: "Sarvodaya Bal Vidyalaya - East Vinod Nagar (Gov.)",
         description:
            "Learned Basic Academic Knowledge and importent thing is 'I enjoyed the school life.'",
         duration: "2019-2021",
      },
   ];

   return (
      <Fragment>
         <Suspense fallback="loading...">
            <div id="educationSection" className="px-3 my-5">
               <h2 className="text-2xl text-gray-900 px-2 z-10 sticky top-0 lg:top-16 bg-gray-300 ">
                  <strong>Education</strong>
               </h2>
               <div className="educationContent text-gray-600  text-justify">
                  {educationDetailsArr.map((singleData, i) => (
                     <Fragment key={i}>
                        <EducationCard
                           cardTitle={singleData.title}
                           whereInfo={singleData.whereInfo}
                           description={singleData.description}
                           duration={singleData.duration}
                        />
                     </Fragment>
                  ))}
               </div>
            </div>
         </Suspense>
      </Fragment>
   );
};
