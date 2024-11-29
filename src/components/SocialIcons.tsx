import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import {
   GithubIcon,
   InstagramIcon,
   LinkedInIcon,
   TwitterXIcon,
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
               <Link
                  to="https://www.linkedin.com/in/raj-nirala/"
                  target="_blank"
               >
                  <LinkedInIcon />
               </Link>
            </div>
            <div className="cursor-pointer ml-2 hover:text-slate-800 transition duration-200">
               <Link to="https://github.com/rajnirala4104" target="_blank">
                  <GithubIcon />
               </Link>
            </div>
            <div className="cursor-pointer hover:text-slate-800 transition duration-200 ml-2">
               <Link
                  to="https://www.instagram.com/raj_nirala_910"
                  target="_blank"
               >
                  <InstagramIcon />
               </Link>
            </div>
            <div className="cursor-pointer hover:text-slate-800 transition duration-200 ml-2">
               <Link
                  to="https://x.com/rajnirala910"
                  target="_blank"
               >
                  <TwitterXIcon />
               </Link>
            </div>
            <div className="cursor-pointer ml-2 hover:text-slate-800 transition duration-200">
               <Link to="https://wa.me/917827424823" target="_blank">
                  <WhatsAppIcon />
               </Link>
            </div>
         </div>
      </Suspense>
   );
};

export default SocialIcons;
