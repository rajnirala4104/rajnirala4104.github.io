import React, { memo } from "react";
import "../App.css";
import { FirstImpression } from "../components";

export const Home = memo(() => {
   return (
      <div className="App">
         <div className="myWebAppContainer">{<FirstImpression />}</div>
      </div>
   );
});
