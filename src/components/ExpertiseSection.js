import React, { Fragment, Suspense } from "react";
import { programingSkils } from "../data/SkillsData";
import { SkillsProgressBar } from "./sub-components";

export const ExpertiseSection = () => {
  return (
    <Fragment>
      <Suspense fallback="loading..">
        <section id="expertiseSection" className="">
          <h2 className="text-2xl text-gray-900 px-2 z-10 sticky top-0 lg:top-16 bg-gray-300">
            <strong>Expertise</strong>
          </h2>
          <div className="allContainer mx-2 lg:flex justify-between ">
            <div className="skilsContainer my-5  lg:w-[100%] mx-auto ">
              <div className="flex justify-between flex-wrap" >
                {programingSkils.map((singleObject, i) => (
                  <Fragment key={i}>
                    <SkillsProgressBar {...singleObject} />
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Suspense>
    </Fragment>
  );
};
