import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../shared/components/NavBar";

export const Root = () => {
   return (
      <Fragment>
         <NavBar />
         <Outlet />
      </Fragment>
   );
};
