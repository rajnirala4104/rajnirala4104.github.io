import { memo } from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../shared/components/NavBar";

export const Root = memo(() => {
   const path = useLocation();
   return (
      <>
         <NavBar pathname={path.pathname} />
         <Outlet />
      </>
   );
});
