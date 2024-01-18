import React, { Fragment, useContext } from "react";
import { allImages } from "../Asserts/images";
import { ImagePopupContext } from "../contexts/indext";

export const Popup = () => {
   const { onPopup, setOnPopup } = useContext(ImagePopupContext);
   return (
      <Fragment>
         <section
            className="absolute flex justify-center items-center backdrop-blur-sm w-full h-[100%] "
            style={{ background: "rgba(0,0,0,0.5)", zIndex: 30 }}
         >
            <div className="content p-4 relative ">
               <span
                  onClick={() => setOnPopup(!onPopup)}
                  className="absolute top-0 left-[90%] my-3 cursor-pointer"
               >
                  <i class="fa-solid fa-x text-white text-[20px]"></i>
               </span>
               <img
                  src={allImages.rajProfileImage}
                  className="bg-white rounded-full saturate-100"
                  alt="Raj Nirala"
               />
            </div>
         </section>
      </Fragment>
   );
};
