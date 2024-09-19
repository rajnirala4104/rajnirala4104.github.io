import React, { Suspense } from "react";
import {
   GithubIcon,
   InstagramIcon,
   LinkedInIcon,
   WhatsAppIcon,
} from "../icons";
import { Classes } from "../interfaces";

const SocialIcons: React.FC<Classes> = ({ classes }) => {
   return (
      <Suspense fallback={"loading.."}>
         <div
            className={`flex text-2xl text-slate-500 justify-between w-[50%] ${classes}`}
         >
            <div className="cursor-pointer hover:text-slate-800 transition duration-200">
               <LinkedInIcon />
            </div>
            <div className="cursor-pointer ml-2 hover:text-slate-800 transition duration-200">
               <GithubIcon />
            </div>
            <div className="cursor-pointer hover:text-slate-800 transition duration-200 ml-2">
               <InstagramIcon />
            </div>
            <div className="cursor-pointer ml-2 hover:text-slate-800 transition duration-200">
               <WhatsAppIcon />
            </div>
         </div>
      </Suspense>
   );
};

export default SocialIcons;
