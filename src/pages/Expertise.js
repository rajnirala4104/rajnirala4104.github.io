import { memo } from "react";
import SkillRange from "../components/SkillRange";
import "./css/Expertise.css";

export const Expertise = memo((props) => {
   // const location = useLocation();
   return (
      <>
         {/* <NavBar activeStatus={location.pathname} /> */}
         <div className="container ExpertiesContainer">
            <div className="MySkillsContainer">
               <SkillRange
                  rangeValue={87}
                  skillName={"JavaScript"}
                  howMuchRotate={"rotate80"}
               />
               <SkillRange
                  rangeValue={78}
                  skillName={"Python"}
                  howMuchRotate={"rotate78"}
               />
               <SkillRange
                  rangeValue={60}
                  skillName={"Node Js"}
                  howMuchRotate={"rotate60"}
               />
               <SkillRange
                  rangeValue={70}
                  skillName={"React Js"}
                  howMuchRotate={"rotate70"}
               />
               <SkillRange
                  rangeValue={46}
                  skillName={"MongoDB"}
                  howMuchRotate={"rotate46"}
               />
               <SkillRange
                  rangeValue={50}
                  skillName={"C"}
                  howMuchRotate={"rotate50"}
               />
               <SkillRange
                  rangeValue={30}
                  skillName={"Java"}
                  howMuchRotate={"rotate30"}
               />
               <SkillRange
                  rangeValue={20}
                  skillName={"PHP"}
                  howMuchRotate={"rotate20"}
               />
            </div>
         </div>
      </>
   );
});
