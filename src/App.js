import { Fragment, Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { _ROUTER } from "./router";

function App() {
   return (
      <Fragment>
         <Suspense fallback="Loading...">
            <RouterProvider router={_ROUTER} />
         </Suspense>
      </Fragment>
   );
}

export default App;
