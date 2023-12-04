import React, { Fragment } from "react";

export const NavBar = () => {
   return (
      <Fragment>
         <header className="hidden md:hidden lg:inline sticky top-0 w-full z-40 ">
            <nav className="flex items-center justify-evenly bg-gray-200 h-16 ">
               <div className="logo">
                  <span className="text-2xl text-slate-800">Raj Nirala</span>
               </div>
               <div className="menus w-[40%] ml-5">
                  <ul className="flex justify-between items-center">
                     <li className="cursor-pointer hover:text-slate-600 text-slate-800">
                        <a href="#home">Home</a>
                     </li>
                     <li className="cursor-pointer hover:text-slate-600 text-slate-800">
                        <a href="#aboutSection"> AboutMe</a>
                     </li>
                     <li className="cursor-pointer hover:text-slate-600 text-slate-800">
                        <a href="#educationSection">Education</a>
                     </li>
                     <li className="cursor-pointer hover:text-slate-600 text-slate-800">
                        <a href="#moreAboutMeSection">MoreAboutMe</a>
                     </li>
                     <li className="cursor-pointer hover:text-slate-600 text-slate-800">
                        <a href="#expertiseSection">Expertise</a>
                     </li>
                     <li className="cursor-pointer hover:text-slate-600 text-slate-800">
                        <a href="#projectSection">Project</a>
                     </li>
                  </ul>
               </div>
            </nav>
         </header>
      </Fragment>
   );
};
