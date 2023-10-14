import React, { Fragment, Suspense } from "react";

export const MoreAboutSecCard = (props) => {
   return (
      <Fragment>
         <Suspense fallback="loading..">
            <div
               className="rounded-md p-2  h-[30rem] flex justify-center items-center mb-3 lg:saturate-[50%] lg:hover:saturate-100"
               style={{
                  background: `linear-gradient(rgba(0, 0, 0, 0.094), rgba(0, 0, 0, 0.924)),
                  url(${props.cardImg}) center/cover`,
                  backgroundAttachment: "fixed",
               }}
            >
               <div className="cardContent text-white w-[80%]">
                  <div className="cardTitle my-2">
                     <span className="font-semibold text-xl">
                        {props.cardTitle}
                     </span>
                  </div>
                  <div className="cardDescription">{props.cardDescription}</div>
               </div>
            </div>
         </Suspense>
      </Fragment>
   );
};
