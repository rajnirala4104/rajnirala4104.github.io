import React, { Fragment } from "react";
import { SingleMenuInterface } from "../interfaces";

const SingleMenuBar: React.FC<SingleMenuInterface> = (props) => {
   return (
      <Fragment>
         <div className="my-2 w-[95%] mx-auto cursor-pointer">
            <div
               className={`p-2 rounded-md hover:bg-gray-500 hover:text-white ${
                  props.active ? "bg-gray-600 text-white" : "bg-gray-300"
               } text-black transition duration-200`}
            >
               <span className="font-semibold">{props.menuTitle}</span>
            </div>
         </div>
      </Fragment>
   );
};

export default SingleMenuBar;
