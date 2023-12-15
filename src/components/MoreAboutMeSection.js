import React, { Fragment, Suspense } from "react";
import { data } from "../data/MoreAboutImgData";
import { MoreAboutSecCard } from "./sub-components";
import { LargeMoreAboutCard } from "./sub-components/LargeMoreAboutMeCard";

export const MoreAboutMeSection = () => {
  return (
    <Fragment>
      <Suspense fallback="loading..">
        <section id="moreAboutMeSection" className="flex flex-col ">
          <h2 className="text-2xl text-gray-900 px-2 z-10 sticky top-0 lg:top-16 bg-gray-300 mb-2">
            <strong>More About Me</strong>
          </h2>
          <div className="flex justify-center lg:justify-evenly flex-wrap items-center lg:w-[100%] lg:mx-auto">
            {data.map((singleObject, i) => (
              <Fragment key={i}>
                <MoreAboutSecCard {...singleObject} />
                <LargeMoreAboutCard {...singleObject} />
              </Fragment>
            ))}
          </div>
        </section>
      </Suspense>
    </Fragment>
  );
};
