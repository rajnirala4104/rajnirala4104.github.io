import { Fragment } from "react/jsx-runtime"
import { CVPopupContext, CvViewerPopupContext } from "../contexts";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CloseIcon } from "../icons";

const CVPopup:React.FC = () => {

   const {cvPopupOnOff, setCvPopupOnOff} = useContext(CVPopupContext);
   const { cvViewerPopupOnOff, setCvViewerPopupOnOff } = useContext(CvViewerPopupContext);

   const clickHandler = () => {
      setCvPopupOnOff(!cvPopupOnOff);
      setCvViewerPopupOnOff(!cvViewerPopupOnOff);
   }

   return (
      <Fragment>
         <section className="w-full h-screen absolute backdrop-blur-sm bg-gradient-to-t from-slate-700 to-transparent top-0 z-20 overflow-hidden bg-[rgba(43,43,43,0.25)] backdrop-blur-sm flex justify-center items-center">
            <div className="relative flex justify-center items-center bg-white rounded-lg p-3 w-[80%] h-[50%]">
               <span
                  onClick={() => setCvPopupOnOff(!cvPopupOnOff)}
                  className='absolute top-2 right-1 text-3xl cursor-pointer hover:text-gray-700'>
                     <CloseIcon />
               </span>
               <div
                  className="flex flex-col justify-center items-center">
                  <button 
                     onClick={clickHandler}
                     className="bg-gray-800 text-gray-50  text-xl m-2 mx-2 p-3 rounded-md hover:bg-gray-700 shadow-lg">
                     Show On Web
                  </button>
                  <button 
                     className="bg-gray-800 text-gray-50  text-xl m-2 mx-2 p-3 rounded-md hover:bg-gray-700 shadow-lg">
                     <Link target="_black"
                           to="https://docs.google.com/document/d/1erh9VMHEh4H6Aek61cXj5w_x0RAoFA_n03WCV0Y7LXA/edit?usp=sharing"
                     >
                        Download CV
                     </Link>
                  </button>
               </div>
            </div>
         </section>
      </Fragment>
   )
}

export default CVPopup;
