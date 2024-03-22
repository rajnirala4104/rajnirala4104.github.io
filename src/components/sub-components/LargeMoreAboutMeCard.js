import React, { Fragment, Suspense } from "react";

export const LargeMoreAboutCard = (props) => {


  return (
    <Fragment>
      <Suspense fallback="loading..">
        <div
          data-aos="fade-up"
          className="hidden bg-fixed rounded-md shadow-lg p-2 m-2  lg:bg-current h-[30rem] lg:w-[46%] lg:flex justify-center items-center mb-3 saturate-[100%] hover:saturate-[100%]  transition-all"
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.094), rgba(0, 0, 0, 0.924)),
                  url(${props.cardImg}) center/cover`,
            boxShadow: "4px 6px 12px -6px black",
          }}
        >
          <div className="cardContent text-white w-[80%]">
            <div className="cardTitle my-2">
              <span className="font-semibold text-2xl">{props.cardTitle}</span>
            </div>
            <div className="cardDescription">{props.cardDescription}</div>
          </div>
        </div>
      </Suspense>
    </Fragment>
  );
};
