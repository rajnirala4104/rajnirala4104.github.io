import { Fragment } from "react";

export const EducationCard = (props) => {
   return (
      <Fragment>
         <div
            // data-aos="fade-up"
            class="relative -z-10 flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg mb-3"
         >
            <div class="p-6">
               <div className="-space-y-2 my-2">
                  <h5 class="mb-2 block font-sans text-[19px] font-semibold text-left leading-snug tracking-normal text-blue-gray-900 antialiased">
                     {props.cardTitle}
                  </h5>
                  <p className="text-[13px]">
                     {" "}
                     <i>{props.whereInfo}</i>
                  </p>
               </div>

               <p class="block font-sans text-[15px] font-light leading-relaxed text-start antialiased">
                  {props.description}
               </p>
            </div>
            {/* <div class="p-6 pt-0">
               <button
                  class="select-none rounded-md bg-gray-500 hover:bg-gray-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  data-ripple-light="true"
               >
                  Read More
               </button>
            </div> */}
         </div>
      </Fragment>
   );
};
