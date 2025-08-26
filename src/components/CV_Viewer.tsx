import { useContext } from "react";
import { Fragment } from "react/jsx-runtime"
import { CvViewerPopupContext } from "../contexts";
import { CloseIcon } from "../icons";

const CV_Viewer:React.FC = () => {
   const { cvViewerPopupOnOff, setCvViewerPopupOnOff } = useContext(CvViewerPopupContext)
   return (
      <Fragment>
         <section className="w-full h-screen absolute bg-gradient-to-t from-slate-700 to-transparent top-0 z-20 overflow-hidden bg-[rgba(43,43,43,0.25)] backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white p-4 flex justify-center items-center relative lg:w-[60%] lg:h-[96%] w-[90%] mx-auto rounded-md">
               <span
                  onClick={() => setCvViewerPopupOnOff(!cvViewerPopupOnOff)}
                  className='absolute top-3 right-4 text-3xl cursor-pointer hover:text-gray-700'>
                     <CloseIcon />
               </span>
               <div className="w-full h-full hidden lg:flex">
                  <iframe
                     className="hidden lg:flex md:flex"
                     width={'100%'}
                     height={"100%"}
                     src="https://docs.google.com/document/d/1erh9VMHEh4H6Aek61cXj5w_x0RAoFA_n03WCV0Y7LXA/preview"/>

               </div>
               <div className="lg:hidden md:hidden p-5 text-center mx-auto flex justify-center items-center">
                  <span>
                     Honestly I would suggest you to download my CV beacuase your device is so small
                  </span>
               </div>
            </div>
         </section>
      </Fragment>
   )
}

export default CV_Viewer;
