import "../App.css";
import { FirstImpression } from "../components";
// import NavBar from "../shared/NavBar";
// import { useLocation } from "react-router-dom";

export const Home = () => {
   // const location = useLocation();
   return (
      <div className="App">
         {/* <NavBar activeStatus={location.pathname}/> */}
         <div className="myWebAppContainer">{<FirstImpression />}</div>
      </div>
   );
};
