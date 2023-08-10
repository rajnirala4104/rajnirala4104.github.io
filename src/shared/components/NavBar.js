import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../App";
import "../css/NavBar.css";

function NavBar(props) {
   const theme = useContext(ThemeContext);

   console.log(`NavBar.. :- ${theme.theme} `);
   return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <div className="logo">
            <Link className="navbar-brand" to="/">
               Raj Nirala
            </Link>
         </div>
         <div className=" navMenus" id="navbarSupportedContent">
            <ul className="navbar-nav">
               <li className="nav-item">
                  <Link
                     className={`nav-a ${
                        props.pathname === "/" ? "isActive" : ""
                     }`}
                     to="/"
                  >
                     Home
                  </Link>
               </li>
               <li className="nav-item">
                  <Link
                     className={`nav-a ${
                        props.pathname === "/whoami" ? "isActive" : ""
                     }`}
                     to="/whoami"
                  >
                     WhoAmI
                  </Link>
               </li>
               <li className="nav-item">
                  <Link
                     className={`nav-a ${
                        props.pathname === "/moreaboutme" ? "isActive" : ""
                     }`}
                     to="/moreaboutme"
                  >
                     MoreAboutMe
                  </Link>
               </li>
               <li className="nav-item">
                  <Link
                     className={`nav-a ${
                        props.pathname === "/education" ? "isActive" : ""
                     }`}
                     to="/education"
                  >
                     Education
                  </Link>
               </li>
               <li className="nav-item">
                  <Link
                     className={`nav-a ${
                        props.pathname === "/expertise" ? "isActive" : ""
                     }`}
                     to="/expertise"
                  >
                     Expertise
                  </Link>
               </li>
               <li className="nav-item">
                  <Link
                     className={`nav-a ${
                        props.pathname === "/projects" ? "isActive" : ""
                     }`}
                     to="/projects"
                  >
                     Projects
                  </Link>
               </li>
               <li className="nav-item ">
                  <Link
                     className={`nav-a ${
                        props.pathname === "/contact" ? "isActive" : ""
                     }`}
                     to="/contact"
                  >
                     Contact
                  </Link>
               </li>
               <li className="nav-item ">
                  <Link onClick={theme.setTheme("dark")}>
                     <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        height="1.8rem"
                        width="1.8rem"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8V16Z"
                           fill="currentColor"
                        ></path>
                        <path
                           fillRule="evenodd"
                           clipRule="evenodd"
                           d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4V8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16V20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z"
                           fill="currentColor"
                        ></path>
                     </svg>
                  </Link>
               </li>
            </ul>
         </div>
      </nav>
   );
}

export default NavBar;
