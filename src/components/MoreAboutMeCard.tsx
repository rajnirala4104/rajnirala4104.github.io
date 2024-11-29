import React, { Fragment, Suspense } from "react";
import { MoreAboutMeCardInterface } from "../interfaces";

const MoreAboutMeCard: React.FC<MoreAboutMeCardInterface> = (props) => {
   return (
      <Fragment>
         <Suspense fallback="loading..">
            <div
               className="hidden lg:bg-local bg-fixed rounded-md shadow-lg p-2 mx-1  h-[35rem] w-[96%] lg:flex justify-center items-center mb-3 saturate-[100%] transition-all duration-200 lg:hover:saturate-150"
               style={{
                  background: `linear-gradient(rgba(0, 0, 0, 0.094), rgba(0, 0, 0, 0.924)), url(${props.cardImg}) center/cover`,
                  boxShadow: "4px 6px 12px -6px black",
               }}
            >
               <div className="cardContent text-white w-[80%] lg:">
                  <div className="cardTitle my-2">
                     <span className="font-semibold text-[27px]">
                        {props.cardTitle}
                     </span>
                  </div>
                  <div className="cardDescription text-[15px]">
                     {props.cardDescription}
                  </div>
               </div>
            </div>
            <div
               className="lg:hidden bg-fixed rounded-md shadow-lg p-2 mx-1  h-[35rem] w-[96%] flex justify-center items-center mb-3 saturate-[100%] transition-all duration-200 lg:hover:saturate-150"
               style={{
                  background: `linear-gradient(rgba(0, 0, 0, 0.094), rgba(0, 0, 0, 0.924)), url(${props.cardImg}) center/cover`,
                  backgroundAttachment: "fixed",
                  boxShadow: "4px 6px 12px -6px black",
               }}
            >
               <div className="cardContent text-white w-[80%] lg:">
                  <div className="cardTitle my-2">
                     <span className="font-semibold text-[27px]">
                        {props.cardTitle}
                     </span>
                  </div>
                  <div className="cardDescription text-[15px]">
                     {props.cardDescription}
                  </div>
               </div>
            </div>
         </Suspense>
      </Fragment>
   );
};

export default MoreAboutMeCard;
