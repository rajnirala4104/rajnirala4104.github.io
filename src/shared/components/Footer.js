import React, { Fragment, Suspense } from "react";
import { Icons } from "../../components/sub-components";

export const Footer = () => {
   return (
      <Fragment>
         <Suspense fallback="loading..">
            <footer className="flex justify-center items-center w-full border bg-gray-600">
               <div className="content flex flex-col justify-center w-full items-center my-4">
                  <span className="text-white text-4xl font-bold my-1">
                     Raj Nirala
                  </span>
                  <Icons />
               </div>
            </footer>
         </Suspense>
      </Fragment>
   );
};
