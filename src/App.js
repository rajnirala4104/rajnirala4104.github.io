import React, { Fragment, Suspense, createContext, useState } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Routes";
import Loading from "./components/Loading";

export const ThemeContext = createContext(null);

function App() {
   const [theme, setTheme] = useState("light");
   return (
      <Fragment>
         <Suspense fallback={Loading}>
            <ThemeContext.Provider value={{ theme, setTheme }}>
               <RouterProvider router={router} />
            </ThemeContext.Provider>
         </Suspense>
      </Fragment>
   );
}

export default App;
