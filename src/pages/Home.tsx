import React, { Fragment } from "react";
import { FloatingSideBar, Footer, MainContainer } from "../components";

const Home: React.FC = () => {
   return (
      <Fragment>
         <div className="w-full h-screen bg-blue-200 px-20 pt-8 pb-2 grid grid-rows-10 gap-y-5 overflow-auto">
            <div className="grid grid-cols-10 gap-5 w-full row-span-9">
               <div className="grid col-span-7 overflow-y-auto">
                  <MainContainer />
               </div>
               <div className="grid  col-span-3 overflow-y-auto">
                  <FloatingSideBar />
               </div>
            </div>
            <div className="w-full col-span-full h-10 row-span-1">
               <Footer />
            </div>
         </div>
      </Fragment>
   );
};

export default Home;
