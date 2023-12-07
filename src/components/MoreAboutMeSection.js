import React, { Fragment, Suspense } from "react";
import { data } from "../data/MoreAboutImgData";
import { MoreAboutSecCard } from "./sub-components";

export const MoreAboutMeSection = () => {
  return (
    <Fragment>
      <Suspense fallback="loading..">
        <section id="moreAboutMeSection" className="flex flex-col px-3">
          <h2 className="text-2xl text-gray-900 px-2 z-10 sticky top-0 lg:top-16 bg-gray-300 mb-2">
            <strong>More About Me</strong>
          </h2>
          <div className="flex justify-center lg:justify-evenly flex-wrap items-center">
            {data.map((singleObject, i) => (
              <Fragment key={i}>
                <MoreAboutSecCard {...singleObject} />
              </Fragment>
            ))}
          </div>
        </section>
      </Suspense>
    </Fragment>
  );
};
