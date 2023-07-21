import { lazy } from "react";

export const FirstImpression = lazy(() => import("./FirstImpression"));
export const MoreAboutMeSingleCard = lazy(() =>
   import("./MoreAboutMeSingleCard")
);
export const ProjectCard = lazy(() => import("./ProjectCard"));
export const SkillRange = lazy(() => import("./SkillRange"));
