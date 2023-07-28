import { memo } from "react";
import "../App.css";
import { FirstImpression } from "../components";
// import NavBar from "../shared/NavBar";
// import { useLocation } from "react-router-dom";

export const Home = memo(() => {
   // const location = useLocation();
   return (
      <div className="App">
         <div className="myWebAppContainer">{<FirstImpression />}</div>
      </div>
   );
});
