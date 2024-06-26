import React, { Fragment, useContext } from "react";
import { ImagePopupContext } from "../contexts/indext";
import { allImages } from "../assets/images";

export const Popup = () => {
   const { onPopup, setOnPopup } = useContext(ImagePopupContext);

   document.body.style.overflow = onPopup ? "hidden" : "auto";
   return (
      <Fragment>
         <section
            className="absolute flex justify-center items-center backdrop-blur-sm w-full h-[100%]"
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
