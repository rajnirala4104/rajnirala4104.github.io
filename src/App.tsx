import { Fragment, useState } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { AboutMeContext, EducationSectionContext } from "./contexts";
import { _ROUTER } from "./router";

function App() {
   const [aboutMeContextOnOff, setAboutMeContextOnOff] =
      useState<boolean>(true);
   const [educationSectionOnOff, setEducationSectiOnOff] =
      useState<boolean>(false);

   return (
      <Fragment>
         <EducationSectionContext.Provider
            value={{ educationSectionOnOff, setEducationSectiOnOff }}
         >
            <AboutMeContext.Provider
               value={{ aboutMeContextOnOff, setAboutMeContextOnOff }}
            >
               <RouterProvider router={_ROUTER} />
            </AboutMeContext.Provider>
         </EducationSectionContext.Provider>
      </Fragment>
   );
}

export default App;
