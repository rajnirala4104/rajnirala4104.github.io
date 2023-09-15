import React, { Suspense } from "react";

export const CV_PopUp = () => {
   return (
      <React.Fragment>
         <Suspense fallback="loading..">
            <div className="container z-10 flex justify-center items-center w-[100vh] h-[100vh]">
               <div className="mainContent w-[70%] h-[50%]">
                  <h1>Hello world, This is CV</h1>
               </div>
            </div>
         </Suspense>
      </React.Fragment>
   );
};
