import React, { Fragment } from "react";
import { HeroComponents } from "../components";

export const Home = () => {
   document.title = "Raj Nirala";
   return (
      <Fragment>
         <HeroComponents />
      </Fragment>
   );
};
