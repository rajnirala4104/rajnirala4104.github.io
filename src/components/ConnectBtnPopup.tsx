import React, { Fragment, Suspense, useContext } from "react";
import { SocialIcons } from ".";
import { ConnectBtnPopupContext } from "../contexts";
import { CloseIcon } from "../icons";

const ConnectBtnPopup: React.FC = () => {
   const { connectBtnPopupOnOff, setConnectBtnPopupOnOff } = useContext(
      ConnectBtnPopupContext
   );

   return (
      <Fragment>
         <Suspense fallback="loading..">
            <div className="w-full h-screen absolute backdrop-blur-sm bg-gradient-to-t from-black to-transparent top-0 z-20 overflow-hidden bg-[rgba(43,43,43,0.25)] backdrop-blur-sm flex justify-center items-center">
               <div className="popupMainContainer relative flex justify-center items-center bg-white rounded-lg p-3 w-[80%] h-[50%]">
                  <span
                     onClick={() =>
                        setConnectBtnPopupOnOff(!connectBtnPopupOnOff)
                     }
                     className="text-2xl absolute top-[4%] right-[1%] cursor-pointer hover:text-gray-600 transition duration-200"
                  >
                     <CloseIcon />
                  </span>
                  <div className="content flex flex-col justify-center items-center">
                     <h1 className="text-2xl font-bold text-center">
                        Thinking the design... till then use these Icons
                     </h1>
                     <div className="text-4xl my-3">
                        <SocialIcons classes="text-4xl" />
                     </div>
                  </div>
               </div>
            </div>
         </Suspense>
      </Fragment>
   );
};

export default ConnectBtnPopup;
