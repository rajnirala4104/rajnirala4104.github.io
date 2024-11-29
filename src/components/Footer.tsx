import React, { Fragment } from "react";

const Footer: React.FC = () => {
   return (
      <Fragment>
         <div className="grid place-content-center items-center bg-white w-full h-full rounded-lg font-mono text-slate-700 hover:text-slate-800 transition duration-200 text-[15px]">
            <span>Copyright &copy; 2024 | Raj Nirala </span>
         </div>
      </Fragment>
   );
};

export default Footer;
