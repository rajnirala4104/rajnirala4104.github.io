import React, { Fragment } from "react";

export const NavBar = () => {
   return (
      <Fragment>
         <header className="hidden md:block">
            <nav>
               <div className="logo">
                  <span>Raj Nirala</span>
               </div>
               <div className="menus">
                  <ul>
                     <li>Home</li>
                     <li>AboutMe</li>
                     <li>Education</li>
                     <li>Expertise</li>
                     <li>Project</li>
                  </ul>
               </div>
            </nav>
         </header>
      </Fragment>
   );
};
