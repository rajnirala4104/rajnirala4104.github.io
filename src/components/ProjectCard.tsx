import React, { Fragment } from "react";
//import { Link } from "react-router-dom";
import { ProjectCardInterface } from "../interfaces";

const ProjectCard: React.FC<ProjectCardInterface> = (props) => {
   // const { projectPopupOnOff, setProjectPopupOnOff } = useContext(ProjectPopupContext);
   
  return (
     <Fragment>
       <div className="mx-3 my-3 pb-4 max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img className="w-full h-48 object-cover" src={props.img} alt={props.projName} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{props.projName}</div>
            <p className="text-gray-700 text-base">{props.projDescription}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <a
              href={props.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              View Project
            </a>
          </div>
        </div>
    </Fragment>
  );
};

export default ProjectCard;
