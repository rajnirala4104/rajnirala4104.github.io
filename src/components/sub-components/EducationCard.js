import { Fragment } from "react";

export const EducationCard = (props) => {
  return (
    <Fragment>
      <div
        data-aos="fade-up"
        className="relative -z-10 lg:w-[80%] flex flex-col rounded-xl bg-gray-100 bg-clip-border text-gray-700 shadow-lg m-3"
      >
        <div className="p-6">
          <div className="-space-y-2 my-2">
            <h5 className="mb-2 block font-sans text-[19px] font-semibold text-left leading-snug tracking-normal text-blue-gray-900 antialiased">
              {props.cardTitle}
            </h5>
            <p className="text-[13px]">
              {" "}
              <i>{props.whereInfo}</i>
            </p>
          </div>

          <p className="block font-sans text-[15px] font-light leading-relaxed text-start antialiased">
            {props.description}
          </p>
        </div>
      </div>
    </Fragment>
  );
};
