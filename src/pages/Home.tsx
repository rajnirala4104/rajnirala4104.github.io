import React, { Fragment } from "react";
import { FloatingSideBar, MainContainer } from "../components";

const Home: React.FC = () => {
   return (
      <Fragment>
         <div className="border border-red-500 w-full h-screen grid grid-cols-10 gap-7 bg-blue-200 px-20 pt-10">
            <div className="grid col-span-7">
               <MainContainer />
            </div>
            <div className="grid  col-span-3 ">
               <FloatingSideBar />
            </div>
         </div>
      </Fragment>
   );
};

export default Home;
