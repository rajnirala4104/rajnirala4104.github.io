import React, { Fragment } from "react";
import { FloatingSideBar, Footer, MainContainer } from "../components";

const Home: React.FC = () => {
   return (
      <Fragment>
         <div className="w-full lg:hidden hidden md:grid h-screen bg-[rgba(0,0,0,0.5)] place-content-center place-items-center p-4 absolute top-0 z-10">
            <div className="bg-white grid place-content-center place-items-center m-4 w-[80%] h-[50vh] rounded-lg">
               <h1 className="text-2xl font-bold text-black text-center p-16">
                  Large Screen version is in progress, till then use mobile
                  version You just need to open this page on your mobile.
               </h1>
            </div>
         </div>
         <div className="w-full h-screen bg-gray-500 lg:px-20 lg:pt-8 lg:pb-2 grid lg:grid-rows-10 gap-y-5 overflow-auto ">
            <div className="grid grid-cols-10 gap-5 w-full lg:row-span-9  lg:h-full md:h-full">
               <div className="lg:grid md:grid md:col-span-7 overflow-y-auto hidden rounded-lg">
                  <MainContainer />
               </div>
               <div className="w-full grid col-span-full lg:col-span-3 lg:overflow-y-auto lg:rounded-xl">
                  <FloatingSideBar />
               </div>
            </div>
            <div className="w-full lg:col-span-full h-10 lg:row-span-1 rounded-lg">
               <Footer />
            </div>
         </div>
      </Fragment>
   );
};

export default Home;
