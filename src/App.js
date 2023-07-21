import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Routes";

function App() {
   return (
      <>
         <Suspense fallback={<>Loadind....</>}>
            <RouterProvider router={router} />
         </Suspense>
      </>
   );
}

export default App;
