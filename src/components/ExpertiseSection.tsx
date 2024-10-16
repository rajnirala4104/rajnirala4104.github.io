import React, { Fragment } from "react";
import { SkillCard } from ".";

const ExpertiseSection: React.FC = () => {
   return (
      <Fragment>
         <div
            id="expertiseSection"
            className="hidden lg:h-full lg:flex lg:flex-col lg:justify-center lg:items-center"
         >
            <h2 className="text-lg text-gray-900 px-2 z-10 sticky top-0 lg:top-0 bg-gray-300 lg:bg-white lg:text-3xl lg:h-20 lg:flex lg:justify-center lg:items-center">
               <strong>Expertise</strong>
            </h2>
            <div className="SkillsContainer lg:flex lg:flex-wrap lg:justify-center lg:items-start lg:overflow-auto">
               <SkillCard />
            </div>
         </div>
      </Fragment>
   );
};

export default ExpertiseSection;
