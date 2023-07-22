import { memo } from "react";
import { moreAboutMeCardData } from "../Data/MoreAboutMeCardData/MoreAboutMeCardData";
import { MoreAboutMeSingleCard } from "../components/";
import "./css/MoreAboutMe.css";

export const MoreAboutMe = memo(function MoreAboutMe(props) {
   // const location = useLocation();
   return (
      <>
         <div className="container moreAboutMeContainer">
            <div className="moreAboutMeContent container">
               {moreAboutMeCardData.map((dataDic, index) => (
                  <MoreAboutMeSingleCard key={index} {...dataDic} />
               ))}
            </div>
         </div>
      </>
   );
});
