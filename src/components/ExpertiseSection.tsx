import React, { Fragment } from "react";
import { SkillCard } from ".";
import { SkillsData } from "../data/SkillsData";

const ExpertiseSection: React.FC = () => {
   return (
      <Fragment>
         <div
            id="expertiseSection"
            className="bg-white lg:h-full flex flex-col justify-center items-center"
         >
            <h2 className="text-lg w-full text-gray-900 px-2 z-10 sticky top-0 lg:top-0 bg-gray-300 lg:bg-white lg:text-3xl lg:h-20 lg:flex lg:justify-center lg:items-center ">
               <strong>Expertise</strong>
            </h2>
            <div className="SkillsContainer flex flex-wrap justify-center items-center w-full lg:w-[90%] bg-white overflow-auto">
               {SkillsData.map((singleSkillObject, i) => (
                  <Fragment key={i}>
                     <SkillCard {...singleSkillObject} />
                  </Fragment>
               ))}
            </div>
         </div>
      </Fragment>
   );
};

export default ExpertiseSection;
