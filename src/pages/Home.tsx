import React, { Fragment } from "react";
import { FloatingSideBar, MainContainer } from "../components";

const Home: React.FC = () => {
   return (
      <Fragment>
         <div>
            <MainContainer />
            <FloatingSideBar />
         </div>
      </Fragment>
   );
};

export default Home;
