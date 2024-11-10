import React, { Fragment, Suspense, useContext } from "react";
import {
   ConnectBtnPopup,
   FloatingSideBar,
   Footer,
   MainContainer,
} from "../components";
import ProjectPopup from "../components/ProjectPopup";
import { ConnectBtnPopupContext, ProjectPopupContext } from "../contexts";

const Home: React.FC = () => {
   const { projectPopupOnOff } = useContext(ProjectPopupContext);
   const { connectBtnPopupOnOff } = useContext(ConnectBtnPopupContext);
   return (
      <Fragment>
         <div className="w-full hidden lg:hidden md:grid h-screen backdrop-blur-sm bg-[rgba(0,0,0,0.5)] place-content-center place-items-center p-4 absolute top-0 z-20">
            <div className="bg-white grid place-content-center place-items-center m-4 w-[80%] h-[50vh] rounded-lg">
               <h1 className="text-2xl font-bold text-black text-center p-16">
                  Desktop version is in progress, till then use mobile version
                  You just need to open this page on your mobile phone.
               </h1>
            </div>
         </div>
         {projectPopupOnOff && <ProjectPopup />}
         {connectBtnPopupOnOff && (
            <Suspense fallback="loading..">
               <ConnectBtnPopup />
            </Suspense>
         )}
         <div className="w-full h-screen bg-[#3c5759]  lg:px-20 lg:pt-8 lg:pb-2 grid lg:grid-rows-10 gap-y-5 overflow-auto ">
            <div className="grid grid-cols-10 gap-5 w-full lg:row-span-9  lg:h-full md:h-full">
               <div className="lg:grid md:grid md:col-span-7 overflow-y-auto hidden rounded-lg `">
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
