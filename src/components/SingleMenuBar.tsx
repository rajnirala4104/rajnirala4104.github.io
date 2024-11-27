import React, { Fragment } from "react";
import { SingleMenuInterface } from "../interfaces";

const SingleMenuBar: React.FC<SingleMenuInterface> = (props) => {
   return (
      <Fragment>
         <div className="my-2 w-[95%] mx-auto cursor-pointer">
            <div
               className={`p-2 rounded-md hover:bg-[#92a8a9] hover:text-white 
                  ${props.active ? "bg-[#3c5759] text-white hover:bg-[#32494b]" : "bg-[#d0d5ce]"} text-black transition duration-200`}
            >
               <span className="font-semibold">{props.menuTitle}</span>
            </div>
         </div>
      </Fragment>
   );
};

export default SingleMenuBar;
