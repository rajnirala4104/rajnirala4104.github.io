import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../shared/components/Footer";
import { NavBar } from "../shared/components/NavBar";

export const Root = () => {
   return (
      <Fragment>
         <NavBar />
         <Outlet />
         <Footer />
      </Fragment>
   );
};
