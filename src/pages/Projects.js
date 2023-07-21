import { data } from "../Data/ProjectCardData/projectCardData";
import ProjectCard from "../components/ProjectCard";
import "./css/Project.css";

export const Projects = () => {
  return (
    <>
      <div className="container projectCardContainer">
        {data.map((details, key) => (
          <ProjectCard key={key} {...details} />
        ))}
      </div>
    </>
  );
};
