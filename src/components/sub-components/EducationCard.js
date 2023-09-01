import { Fragment } from "react";

export const EducationCard = () => {
   return (
      <Fragment>
         <div class="relative -z-10 flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg mb-3">
            <div class="p-6">
               <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  UI/UX Review Check
               </h5>
               <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                  The place is close to Barceloneta Beach and bus stop just 2
                  min by walk and near to "Naviglio" where you can enjoy the
                  main night life in Barcelona.
               </p>
            </div>
            <div class="p-6 pt-0">
               <button
                  class="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  data-ripple-light="true"
               >
                  Read More
               </button>
            </div>
         </div>
      </Fragment>
   );
};
