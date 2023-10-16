import { Fragment, Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { _ROUTER } from "./router/index";

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
